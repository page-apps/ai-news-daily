#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd -P)"
cd "$project_root"
if [[ -f .env ]]; then
  set -a
  # shellcheck disable=SC1091
  source .env
  set +a
fi

repo="${NEWS_EDITORIAL_REPO:-${EDITORIAL_REPO:-}}"
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd -P)"
date=""
pipeline=""
publish_all=false
for arg in "$@"; do
  case "$arg" in
    --date=*) date="${arg#--date=}" ;;
    --pipeline=*) pipeline="${arg#--pipeline=}" ;;
    --all) publish_all=true ;;
  esac
done
[[ -n "$repo" ]] || { echo "Set NEWS_EDITORIAL_REPO to the private editorial repository." >&2; exit 1; }
[[ "$repo" = /* ]] || { echo "NEWS_EDITORIAL_REPO must be an absolute path." >&2; exit 1; }
[[ "$date" =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}$ ]] || { echo "Use --date=YYYY-MM-DD." >&2; exit 1; }
[[ "$publish_all" == false || -z "$pipeline" ]] || { echo "Use either --all or --pipeline=ID." >&2; exit 1; }
[[ -z "$pipeline" || "$pipeline" =~ ^[a-z0-9][a-z0-9-]*$ ]] || { echo "Pipeline ids must be lowercase letters, numbers and hyphens." >&2; exit 1; }
repo="$(cd "$repo" && pwd -P)"
cd "$repo"

declare -a bundles
if [[ "$publish_all" == true ]]; then
  draft_root="drafts/$date"
  [[ -d "$draft_root" ]] || { echo "No pipeline drafts found for $date." >&2; exit 1; }
  # A legacy v1 bundle stores its news in drafts/<date>/news. Discover only
  # immediate pipeline directories that contain their own manifest so that
  # support folders are never mistaken for a pipeline.
  mapfile -t bundles < <(find "$draft_root" -mindepth 2 -maxdepth 2 -type f -name manifest.json -printf '%h\n' | sort)
  [[ "${#bundles[@]}" -gt 0 ]] || { echo "No pipeline drafts found for $date." >&2; exit 1; }
elif [[ -n "$pipeline" ]]; then
  bundle="drafts/$date/$pipeline"
  [[ -d "$bundle" ]] || { echo "No draft bundle found at $bundle." >&2; exit 1; }
  bundles=("$bundle")
elif [[ -d "drafts/$date/ai" ]]; then
  bundles=("drafts/$date/ai")
elif [[ -f "drafts/$date/manifest.json" ]]; then
  # Backward compatibility for v1 single-pipeline bundles.
  bundles=("drafts/$date")
else
  echo "No default AI draft found for $date. Use --pipeline=ID or --all." >&2
  exit 1
fi

for bundle in "${bundles[@]}"; do
  node "$script_dir/validate-editorial-draft.mjs" --bundle="$repo/$bundle" --date="$date"
  if git ls-files --error-unmatch -- "$bundle" >/dev/null 2>&1 \
    && git diff --cached --quiet -- "$bundle" \
    && git diff --quiet -- "$bundle"; then
    echo "Draft bundle $bundle is already committed locally; continuing with synchronization."
    continue
  fi

  # Stage and commit only this validated bundle; unrelated worktree changes are excluded.
  git add -- "$bundle"
  mapfile -t staged < <(git diff --cached --name-only -- "$bundle")
  [[ "${#staged[@]}" -eq 12 ]] || { echo "Expected exactly 12 staged bundle files for $bundle; refusing to commit." >&2; exit 1; }
  for path in "${staged[@]}"; do [[ "$path" == "$bundle"/* ]] || { echo "Unexpected staged path: $path" >&2; exit 1; }; done
  git commit --only -m "Add AI Daily editorial draft: $date (${bundle##*/})" -- "$bundle"
done

echo "Pulling the latest remote changes before push."
git pull --rebase --autostash
git push
echo "Pushed ${#bundles[@]} editorial draft bundle(s) for $date."
