#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"

latest="$(find content/daily -maxdepth 1 -type f -name '*.md' -print | sort | tail -n 1)"
if [[ -z "$latest" ]]; then
  echo "No daily edition found." >&2
  exit 1
fi
node scripts/review-daily.mjs

git add -- content/daily content/news
if git diff --cached --quiet -- content/daily content/news; then
  if git rev-parse --abbrev-ref --symbolic-full-name '@{u}' >/dev/null 2>&1 && [[ -n "$(git log '@{u}'..HEAD --oneline)" ]]; then
    git push
    echo "Pushed the existing publication commit."
    exit 0
  fi
  echo "No unpublished content changes."
  exit 0
fi

git commit --only -- content/daily content/news -m "Publish AI Daily Brief: $(basename "$latest" .md)"
git push
echo "Published $(basename "$latest") — GitHub Actions will deploy the site."
