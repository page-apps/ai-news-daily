# AI Daily Brief

A static, installable reading app for one considered AI-news edition per day. It is designed for narrow mobile screens and e-readers, works offline after its first load, and renders Mermaid diagrams and LaTex mathematics in Markdown.

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
# Review content/daily/YYYY-MM-DD.md, then change `status: draft` to `status: published`
pnpm publish:daily
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

If you prefer fully unattended publication, change the generated front matter to `status: published` in `scripts/generate-daily.mjs` and schedule `pnpm publish:daily` after the generation job. That removes the human review safeguard.

## Writing an edition by hand

Add Markdown to `content/daily/YYYY-MM-DD.md` with the same front matter as the sample. Use fenced `mermaid` code blocks for diagrams and standard `$...$` / `$$...$$` delimiters for maths.
