import {
  SessionPatCredentialProvider,
  PersistentPatCredentialProvider,
  type CredentialProvider,
  type StorageAdapter,
  type TokenRequest,
} from "@repo-apps/credentials";
import {
  createRepositoryClient,
  RepositoryError,
  type RepositoryClient,
  type RepositoryTarget,
} from "@repo-apps/repo-client";

/** The two repositories this browser app may work with. Values are supplied by the host. */
export interface NewsRepositoryConfig {
  readonly editorial: RepositoryTarget;
  readonly site: RepositoryTarget;
}

/** Parses `owner/name`, `owner/name#branch`, or a GitHub repository URL. */
export function parseRepositoryTarget(value: string, defaultBranch = "main"): RepositoryTarget {
  const input = value.trim();
  const urlMatch = /^https?:\/\/github\.com\/([^/]+)\/([^/#]+)(?:\/tree\/([^/?#]+))?\/?$/.exec(input);
  const match = urlMatch ?? /^(?:([^/]+)\/)?([^/#]+)(?:#([^/#]+))?$/.exec(input);
  if (!match) throw new Error("Repository must be owner/name, owner/name#branch, or a GitHub URL.");
  const owner = urlMatch ? match[1] : match[1];
  const name = urlMatch ? match[2] : match[2];
  const branch = (urlMatch ? match[3] : match[3]) ?? defaultBranch;
  if (!owner || !name || !branch || /[\s]/.test(`${owner}${name}${branch}`)) {
    throw new Error("Repository owner, name, and branch are required.");
  }
  return { owner, name, branch };
}

export function repositoryConfigFromIdentities(
  editorial: string,
  site: string,
  defaultBranch = "main",
): NewsRepositoryConfig {
  return {
    editorial: parseRepositoryTarget(editorial, defaultBranch),
    site: parseRepositoryTarget(site, defaultBranch),
  };
}

export interface GitHubBrowserConnectionOptions {
  readonly appId?: string;
  readonly requestToken: TokenRequest;
  readonly storage?: StorageAdapter;
  readonly persist?: boolean;
}

/**
 * Connects a PAT for this tab by default. Persistence is deliberately opt-in and
 * should only be passed after an explicit user consent action.
 */
export function connectGitHubPat(options: GitHubBrowserConnectionOptions): CredentialProvider {
  const providerOptions = {
    appId: options.appId ?? "ai-news-daily",
    requestToken: options.requestToken,
    ...(options.storage === undefined ? {} : { storage: options.storage }),
  };
  return options.persist
    ? new PersistentPatCredentialProvider(providerOptions)
    : new SessionPatCredentialProvider(providerOptions);
}

export function createNewsRepositoryClients(
  config: NewsRepositoryConfig,
  credentials: CredentialProvider,
): { editorial: RepositoryClient; site: RepositoryClient } {
  return {
    editorial: createRepositoryClient({ repository: config.editorial, credentials }),
    site: createRepositoryClient({ repository: config.site, credentials }),
  };
}

/** Verifies both configured repositories before any read or write is attempted. */
export async function verifyNewsRepositories(
  clients: ReturnType<typeof createNewsRepositoryClients>,
): Promise<{ editorial: Awaited<ReturnType<RepositoryClient["verifyAccess"]>>; site: Awaited<ReturnType<RepositoryClient["verifyAccess"]>> }> {
  const [editorial, site] = await Promise.all([
    clients.editorial.verifyAccess(),
    clients.site.verifyAccess(),
  ]);
  return { editorial, site };
}

/** Resolve the account behind the browser credential without exposing its token to UI code. */
export async function authenticatedGitHubLogin(credentials: CredentialProvider): Promise<string> {
  const credential = await credentials.get();
  if (!credential) throw new RepositoryError("authentication", "Connect a GitHub personal access token before reviewing drafts.", { status: 401 });
  const response = await fetch("https://api.github.com/user", {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${credential.token}`,
      "X-GitHub-Api-Version": "2022-11-28"
    },
    credentials: "omit"
  });
  if (!response.ok) throw new RepositoryError("authentication", "GitHub could not verify the connected account.", { status: response.status });
  const value: unknown = await response.json();
  if (!value || typeof value !== "object" || typeof (value as { login?: unknown }).login !== "string") {
    throw new RepositoryError("invalid-response", "GitHub returned an invalid account response.");
  }
  return (value as { login: string }).login;
}
