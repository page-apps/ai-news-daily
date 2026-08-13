#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"

latest="$(find content/daily -maxdepth 1 -type f -name '*.md' -print | sort | tail -n 1)"
if [[ -z "$latest" ]]; then
  echo "No daily edition found." >&2
  exit 1
fi
if ! grep -q '^status: published$' "$latest"; then
  echo "$(basename "$latest") is still a draft. Review it and set status: published first." >&2
  exit 1
fi

git add -- "$latest"
if git diff --cached --quiet -- "$latest"; then
  echo "No unpublished content changes."
  exit 0
fi

git commit --only -- "$latest" -m "Publish AI Daily Brief: $(basename "$latest" .md)"
git push
echo "Published $(basename "$latest") — GitHub Actions will deploy the site."
