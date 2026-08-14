# Browser review architecture

## Purpose

The public Pages site contains only stable, approved editions. A local cron job
creates drafts in a separate private editorial repository. The deployed PWA
loads that private bundle only after its owner explicitly connects a
fine-grained GitHub PAT in the browser.

An unlisted URL is not an access-control mechanism. `/review/` is a public
static shell containing no editorial text; access to draft data is granted by
the browser-held, repository-limited PAT.

## Repositories

| Repository | Visibility | Holds |
| --- | --- | --- |
| `OWNER/ai-news-daily-editorial` | private | Draft bundles and private review history |
| `OWNER/ai-news-daily` | public | PWA source and stable Markdown published by Pages |

Both repository identities are public build configuration supplied through
`PUBLIC_NEWS_*` environment variables. Credentials are never build
configuration.

## Draft bundle

The local generator writes exactly one self-contained bundle per date:

```text
drafts/YYYY-MM-DD/
  manifest.json
  daily.md
  news/
    01-<slug>.md
    … 10-<slug>.md
```

`manifest.json` records the date, ten story IDs, generator versions, and the
draft bundle schema version. Every Markdown document remains an OKF-inspired
concept with provenance, tags, categories, generation metadata and `draft`
lifecycle state.

## Browser approval transaction

1. The review page verifies the PAT can read the private editorial repository
   and write the public publication repository. It confirms the authenticated
   GitHub login equals `PUBLIC_NEWS_REVIEWER_LOGIN`.
2. It reads one selected bundle from the private repository and keeps the file
   SHAs/head revision. The review UI displays and edits only that in-memory
   model.
3. Saving edits uses a revision-aware batch commit to the private bundle.
   A changed head is a visible conflict; the reviewer must reload or explicitly
   reapply their edits.
4. **Approve & publish** first saves outstanding private edits. After an
   explicit confirmation, it writes the stable daily document and ten stable
   news documents to the public repository in one batch commit. It adds
   `verified: { by: human:<GitHub login>, at: <ISO timestamp> }` and changes
   `status` to `stable`.
5. It then closes the private bundle (`manifest.status: published`) so it is
   not presented for review again. The public-repository push triggers the
   existing GitHub Pages workflow.

There is no cross-repository atomic Git transaction. If public promotion fails,
the private reviewed bundle remains intact and the UI offers a retry. If closing
the private bundle fails after public promotion, the public commit remains the
source of truth and the UI reports the recovery condition instead of publishing
another edition silently.

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
- The public promotion batch must contain exactly one daily file plus the ten
  selected story files and no unrelated paths.
