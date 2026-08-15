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

Open `/review/` and connect a fine-grained, expiring GitHub PAT. It must cover only the editorial and public repositories with **Contents: read and write**. The token is kept in the current browser tab by default and is never sent to the build or placed in a URL.

The page verifies the configured GitHub login, loads the newest private draft, and lets you correct its title, summary, categories, tags and source links. **Approve & publish** records `human:<GitHub login>` verification, promotes all eleven concepts to `stable` in a single public-repository commit, and triggers Pages deployment. Revision conflicts are shown instead of silently overwriting a newer draft.

Read [REVIEW-ARCHITECTURE.md](docs/REVIEW-ARCHITECTURE.md) for the transaction and security model.

## Writing an edition by hand

Add Markdown to `content/daily/YYYY-MM-DD.md` and `content/news/YYYY-MM-DD-<story>.md` with the same front matter as the sample. Use fenced `mermaid` code blocks for diagrams and standard `$...$` / `$$...$$` delimiters for maths.
