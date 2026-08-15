import {
  SessionPatCredentialProvider,
  PersistentPatCredentialProvider,
  SharedPatCredentialProvider,
  type CredentialProvider,
  type StorageAdapter,
  type TokenRequest,
} from "@repo-apps/credentials";
import {
  createRepositoryClient,
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

export const NEWS_REVIEW_APP_ID = "ai-news-daily";

/**
 * Connects a PAT for this tab by default. Persistence is deliberately opt-in and
 * should only be passed after an explicit user consent action.
 */
export function connectGitHubPat(options: GitHubBrowserConnectionOptions): CredentialProvider {
  const providerOptions = {
    appId: options.appId ?? NEWS_REVIEW_APP_ID,
    requestToken: options.requestToken,
    ...(options.storage === undefined ? {} : { storage: options.storage }),
  };
  return options.persist
    ? new PersistentPatCredentialProvider(providerOptions)
    : new SessionPatCredentialProvider(providerOptions);
}

/** Uses the Page Apps same-origin vault without exposing its token to app code. */
export function sharedNewsPat(requestToken: TokenRequest = async () => ""): SharedPatCredentialProvider {
  return new SharedPatCredentialProvider({
    appId: NEWS_REVIEW_APP_ID,
    requestToken,
    repositoryHint: "page-apps/ai-news-daily-editorial",
  });
}

/** Drives the conditional Review link without reading a raw credential. */
export async function hasAvailableNewsCredential(): Promise<boolean> {
  try {
    const shared = sharedNewsPat();
    if (await shared.hasShared()) return true;
    const session = new SessionPatCredentialProvider({ appId: NEWS_REVIEW_APP_ID, requestToken: async () => "" });
    if (await session.get()) return true;
    const persistent = new PersistentPatCredentialProvider({ appId: NEWS_REVIEW_APP_ID, requestToken: async () => "" });
    return Boolean(await persistent.get());
  } catch {
    return false;
  }
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
): Promise<{ account: Awaited<ReturnType<RepositoryClient["verifyAccount"]>>; editorial: Awaited<ReturnType<RepositoryClient["verifyAccess"]>>; site: Awaited<ReturnType<RepositoryClient["verifyAccess"]>> }> {
  const [account, editorial, site] = await Promise.all([
    clients.site.verifyAccount(),
    clients.editorial.verifyAccess(),
    clients.site.verifyAccess(),
  ]);
  return { account, editorial, site };
}
