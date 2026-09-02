# Browser review architecture

## Purpose

The public Pages site contains only stable editions. A local cron job creates
drafts in a separate private editorial repository. Each draft is either
approved by the independent auto-review gate or loaded by the owner after
explicitly connecting a fine-grained GitHub PAT in the browser for manual
review.

An unlisted URL is not an access-control mechanism. `/review/` is a public
static shell containing no editorial text; access to draft data is granted by
the browser-held, repository-limited PAT. The private repository maintains
`drafts/index.json` so the queue can load bundle metadata with one file request
instead of traversing every historical directory; older repositories use the
slower directory scan until the index is generated.

## Repositories

| Repository | Visibility | Holds |
| --- | --- | --- |
| `OWNER/ai-news-daily-editorial` | private | Draft bundles and private review history |
| `OWNER/ai-news-daily` | public | PWA source and stable Markdown published by Pages |

Both repository identities are public build configuration supplied through
`PUBLIC_NEWS_*` environment variables. Credentials are never build
configuration.

## Draft bundle

The local generator writes one self-contained bundle per pipeline and date:

```text
drafts/YYYY-MM-DD/
  PIPELINE-ID/
    manifest.json
    daily.md
    news/
      YYYY-MM-DD-PIPELINE-ID-01-<slug>.md
      … 10-<slug>.md
```

`manifest.json` records the date, pipeline identity, unique public article ID,
ten story IDs, generator versions, and the draft bundle schema version. Every
Markdown document remains an OKF-inspired concept with provenance, tags,
categories, generation metadata and `draft` lifecycle state. The optional
`autoReview` record stores the reviewer, score, threshold and concise reasons
for either `auto_approved` or `manual_review`. The legacy single-bundle layout
is still readable for existing drafts.

## Automatic approval transaction

The local `auto:publish` command is the only automatic publication path:

1. It validates the bundle shape, lifecycle state, exact freshness window,
   required article sections, word count, source URLs and citation allowlist.
2. It sends the complete private bundle to an independent read-only reviewer
   agent. The agent must return `auto_publish`, a score of at least 90 by
   default, and no blocking issues.
3. A passing bundle is promoted with exactly one daily file and ten supporting
   news files in a public-repository commit. The documents receive
   `verified: { by: machine:auto-review/<agent>/<model>, at: <ISO timestamp> }`.
4. The private manifest is then closed as `published` and retains the review
   result for auditability.

If any check fails, the public repository is untouched. The private manifest
remains `draft` and receives `autoReview.status: manual_review`, so the item
appears in `/review/`. Existing manual-review items are not retried by the
scheduled job; use `--retry-manual` deliberately after correcting the cause.

The public and private commits are not atomic. If public promotion succeeds
but private closure fails, the public commit remains the source of truth and a
subsequent run safely recognises an identical public bundle instead of
publishing a second copy.

## Browser approval transaction

1. The review page verifies the PAT can read the private editorial repository
   and write the public publication repository. It confirms the authenticated
   GitHub login equals `PUBLIC_NEWS_REVIEWER_LOGIN`.
2. It lists every bundle with `manifest.status: draft` and lets the reviewer
   choose one, including multiple independent articles from the same day. It
   keeps the selected bundle’s file SHAs/head revision. The review UI displays
   and edits only that in-memory model.
3. Saving edits uses a revision-aware batch commit to the private bundle.
   A changed head is a visible conflict; the reviewer must reload or explicitly
   reapply their edits.
4. **Approve & publish** first saves outstanding private edits. After an
   explicit confirmation, it writes the stable daily document at
   `content/daily/YYYY-MM-DD--PIPELINE-ID.md` and ten stable news documents to
   the public repository in one batch commit. It adds
   `verified: { by: human:<GitHub login>, at: <ISO timestamp> }` and changes
   `status` to `stable`.
5. It then closes the private bundle (`manifest.status: published`) so it is
   not presented for review again. **Discard private draft** instead changes
   only the private manifest to `discarded`; the bundle remains retained but
   is no longer listed for review. The public-repository push triggers the
   existing GitHub Pages workflow. An automatically published bundle skips this
   browser transaction because it has already passed the automatic approval
   transaction above.

There is no cross-repository atomic Git transaction. If public promotion fails,
the private reviewed bundle remains intact and the UI offers a retry. If closing
the private bundle fails after public promotion, the public commit remains the
source of truth and the UI reports the recovery condition instead of publishing
another edition silently.

The review client keeps the selected bundle in memory when switching drafts and
reloads only that bundle’s eleven files. Saving edits reloads those eleven files
to refresh their revisions; it does not rescan the queue. After publish or
discard, the current item is removed from the in-memory queue and the next item
is loaded directly.

## Credential policy

- Use a fine-grained, expiring PAT owned by the reviewer.
- Limit it to these two repositories and **Contents: read and write** only.
- Keep it session-only by default. Persistent/shared browser storage requires
  explicit user acknowledgement and a clear disconnect control.
- Never place it in a URL, source file, build environment, analytics payload,
  console output, issue, commit or generated Pages asset.

This is a personal-use boundary, not a multi-user security system. A browser
token can be exposed by compromised browser extensions, XSS or a shared device.

## Required checks

- A production build must not contain `github_pat_`, `Bearer ` tokens, draft
  titles, draft source URLs or private repository file bodies.
- The review route must work when no PAT is connected and reveal no private
  data.
- All reads/writes must use the repository client and pass expected file/head
  revisions; direct `fetch("https://api.github.com")` calls from page UI are
  forbidden.
- Each public promotion batch must contain exactly one selected pipeline daily
  file plus its ten selected story files and no unrelated paths.
