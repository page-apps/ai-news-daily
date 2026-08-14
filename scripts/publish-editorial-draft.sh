#!/usr/bin/env bash
set -euo pipefail

repo="${NEWS_EDITORIAL_REPO:-${EDITORIAL_REPO:-}}"
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd -P)"
date=""
for arg in "$@"; do case "$arg" in --date=*) date="${arg#--date=}";; esac; done
[[ -n "$repo" ]] || { echo "Set NEWS_EDITORIAL_REPO to the private editorial repository." >&2; exit 1; }
[[ "$repo" = /* ]] || { echo "NEWS_EDITORIAL_REPO must be an absolute path." >&2; exit 1; }
[[ "$date" =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}$ ]] || { echo "Use --date=YYYY-MM-DD." >&2; exit 1; }
repo="$(cd "$repo" && pwd -P)"
bundle="drafts/$date"
cd "$repo"
node "$script_dir/validate-editorial-draft.mjs" --bundle="$repo/$bundle"

# Stage only this validated bundle. The explicit path check prevents a bad
# invocation from turning an unrelated working-tree change into a publication.
git add -- "$bundle"
mapfile -t staged < <(git diff --cached --name-only -- "$bundle")
[[ "${#staged[@]}" -eq 12 ]] || { echo "Expected exactly 12 staged bundle files; refusing to commit." >&2; exit 1; }
for path in "${staged[@]}"; do [[ "$path" == "$bundle"/* ]] || { echo "Unexpected staged path: $path" >&2; exit 1; }; done
if git diff --cached --quiet -- "$bundle"; then
  echo "Draft bundle $date is already committed; nothing to publish."
  exit 0
fi
git commit --only -- "$bundle" -m "Add AI Daily editorial draft: $date"
git push
echo "Pushed only editorial draft bundle $bundle."
