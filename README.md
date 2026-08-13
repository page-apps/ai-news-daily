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

1. Create an empty GitHub repository, add it as `origin`, and push `main`.
2. In the repository’s **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Install dependencies with `pnpm install` and authenticate the CLI you plan to use (`codex` or `copilot`).
4. Edit `prompts/preferences.md` to establish the editorial lens you want.

The deploy workflow only builds public Markdown already in the repository. Research is intentionally run on your own machine, so your coding-agent credentials never enter GitHub Actions.

## Daily editorial run

The default is a two-pass Codex workflow: `gpt-5.6-luna` finds and validates the day’s ten stories cheaply; `gpt-5.6-sol` researches their implications and writes the edition.

```sh
pnpm generate:daily
# Review the daily brief and ten files in content/news/YYYY-MM-DD-*.md.
NEWS_REVIEWER=human:your-id pnpm publish:daily
```

Use GitHub Copilot CLI for either pass by setting `NEWS_RESEARCH_AGENT=copilot` or `NEWS_WRITER_AGENT=copilot`. The models and timezone are all configurable:

```sh
NEWS_RESEARCH_MODEL=gpt-5.6-luna \
NEWS_WRITER_MODEL=gpt-5.6-sol \
NEWS_TIMEZONE=Australia/Sydney \
pnpm generate:daily
```

For a daily cron job at 6:30am Sydney time, use an absolute project path and leave the review/publish step as a deliberate second action:

```cron
30 6 * * * cd /path/to/ai-news-daily && /usr/local/bin/pnpm generate:daily >> /tmp/ai-news-daily.log 2>&1
```

`publish:daily` is the deliberate review action: it upgrades the day's eleven reviewed concepts from `draft` to `stable`, records the human verifier and commits/pushes only those content files. It refuses to publish without `NEWS_REVIEWER=human:...`.

If you prefer fully unattended publication, replace the review script with a machine-verification policy of your own. The default intentionally does not imply that a model output has received human review.

## Writing an edition by hand

Add Markdown to `content/daily/YYYY-MM-DD.md` and `content/news/YYYY-MM-DD-<story>.md` with the same front matter as the sample. Use fenced `mermaid` code blocks for diagrams and standard `$...$` / `$$...$$` delimiters for maths.
