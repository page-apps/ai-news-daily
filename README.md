# AI Daily Brief

A static, installable reading app for one considered AI-news edition per day. It is designed for narrow mobile screens and e-readers, works offline after its first load, and renders Mermaid diagrams and LaTex mathematics in Markdown.

## Connected news knowledge

The repository is an [Open Knowledge Format (OKF) v0.2](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf%2FSPEC.md)-inspired knowledge bundle: the daily brief and each individual news item are Markdown concepts with YAML frontmatter. The implementation uses the applicable OKF conventions:

- `type`, title, description, categories and tags make concepts legible to people and agents.
- `sources` records provenance per news concept, while `generated` and `verified` distinguish agent output from human review.
- `status` follows the OKF lifecycle (`draft`, `stable`, `deprecated`) and `stale_after` makes the freshness of a daily report explicit.
- Links between story pages are generated from shared tags and categories; their Markdown source also includes ordinary links to related news concepts.

Categories are deliberately limited to eight stable reader-facing groups: Models & research; Products & deployment; Business & markets; Infrastructure & compute; Policy & governance; Safety & society; Science & applications; and Open source. Tags are specific, free-form lowercase links such as `openai`, `inference`, or `copyright`.

## First-time setup

1. Create a private `OWNER/ai-news-daily-editorial` repository for generated drafts, and a public `OWNER/ai-news-daily` repository for this PWA and approved editions.
2. In the public repository’s **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Set public repository variables: `NEWS_EDITORIAL_REPOSITORY`, `NEWS_REVIEWER_LOGIN`, and optionally `NEWS_EDITORIAL_BRANCH` / `NEWS_PUBLIC_BRANCH`. These are repository names and a GitHub login—not secrets.
4. Install dependencies with `pnpm install`, then edit `prompts/preferences.md` to establish the editorial lens you want.
5. Copy `.env.example` to `.env` and set the two repository names plus your GitHub login. `.env` is ignored and is loaded by the daily generator locally.

The deploy workflow only builds stable Markdown already in the public repository. Research credentials and draft text never enter GitHub Actions or the Pages artifact.

## Daily editorial run

The default is a two-pass Codex workflow: `gpt-5.6-luna` finds and validates the day’s ten stories cheaply; `gpt-5.6-sol` researches their implications and writes the edition. It writes one isolated draft bundle to the private editorial checkout.

```sh
pnpm generate:daily
pnpm publish:draft -- --date=YYYY-MM-DD
```

The local cron can run both commands. Human review happens at `/review/` in the deployed app, never in the terminal.

Use GitHub Copilot CLI for either pass by setting `NEWS_RESEARCH_AGENT=copilot` or `NEWS_WRITER_AGENT=copilot`. The models and timezone are all configurable:

```sh
NEWS_RESEARCH_MODEL=gpt-5.6-luna \
NEWS_WRITER_MODEL=gpt-5.6-sol \
NEWS_TIMEZONE=Australia/Sydney \
pnpm generate:daily
```

For a daily cron job at 6:30am Sydney time, use absolute paths to both checkouts:

```cron
30 6 * * * cd /path/to/ai-news-daily && /usr/local/bin/pnpm generate:daily && /usr/local/bin/pnpm publish:draft -- --date=$(date +\%F) >> /tmp/ai-news-daily.log 2>&1
```

## Browser approval

Set up a fine-grained, expiring GitHub PAT once in the [Page Apps hub](https://page-apps.github.io/). It must cover both `page-apps/ai-news-daily-editorial` and `page-apps/ai-news-daily` with **Contents: read and write**. Because the hub and this project page share the `page-apps.github.io` origin, AI Daily can discover that credential without putting it in a URL or build artifact. The first visit to `/review/` asks for explicit permission to use the shared PAT; later visits reconnect automatically after that app registration. A tab-only PAT remains available as a fallback.

When a hub or app credential is available, a **Review** link appears in the site header. The review page independently verifies the configured GitHub login and read/write access to both repositories, then loads the newest private draft. You review one complete daily article—not ten story cards—with the full body and citation list visible. Title, introduction, article Markdown, categories, tags and sources remain editable. The ten supporting news concepts are retained for connected-news navigation and publish automatically with the article.

**Approve article & publish** first saves your edits to the private draft, then records `human:<GitHub login>` verification, promotes the daily article and its ten supporting concepts to `stable` in one public-repository commit, and triggers Pages deployment. The UI reports each phase and the resulting commit. Revision conflicts are shown instead of silently overwriting a newer draft.

Read [REVIEW-ARCHITECTURE.md](docs/REVIEW-ARCHITECTURE.md) for the transaction and security model.

## Writing an edition by hand

Add Markdown to `content/daily/YYYY-MM-DD.md` and `content/news/YYYY-MM-DD-<story>.md` with the same front matter as the sample. Use fenced `mermaid` code blocks for diagrams and standard `$...$` / `$$...$$` delimiters for maths.
