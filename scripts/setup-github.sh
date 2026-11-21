#!/usr/bin/env bash
# 관리자용: 통합 커밋을 main에 push한 뒤 한 번 실행합니다.
# 필요: GitHub CLI(gh) 로그인 (gh auth login), 저장소 admin 권한
# 사용: bash scripts/setup-github.sh 팀원A계정 팀원B계정 팀원C계정
# 참고: 이 저장소는 PR #1이 이미 있으므로 새 Issue는 #2부터 만들어집니다.
set -euo pipefail

REPO=$(git remote get-url origin | sed -E 's#(git@github.com:|https://github.com/)##; s#\.git$##')
echo "▶ 저장소: $REPO"

echo "▶ 1/5 라벨"
gh label create feat     --color 1f883d --description "새 기능"        --repo "$REPO" --force
gh label create fix      --color d73a4a --description "버그 수정"      --repo "$REPO" --force
gh label create docs     --color 0075ca --description "문서"           --repo "$REPO" --force
gh label create refactor --color a2eeef --description "구조 개선"      --repo "$REPO" --force
gh label create init     --color 6e7781 --description "초기 세팅"      --repo "$REPO" --force

echo "▶ 2/5 Issue (docs/issues/2~5 순서대로 → 저장소의 다음 번호부터)"
for f in docs/issues/[2-9]-*.md; do
  title=$(sed -n '1p' "$f")
  label=$(sed -n '2p' "$f" | sed 's/^labels: //')
  awk 'f{print} /^---$/{f=1}' "$f" > /tmp/issue-body.md
  gh issue create --repo "$REPO" --title "$title" --label "$label" --body-file /tmp/issue-body.md
done

echo "▶ 3/5 머지 후 브랜치 자동 삭제"
gh api -X PATCH "repos/$REPO" -F delete_branch_on_merge=true --silent

echo "▶ 4/5 main 보호 규칙 (PR 필수 · 승인 1명 · CI check 통과 · 대화 해결)"
gh api -X POST "repos/$REPO/rulesets" --input .github/rulesets/main-protection.json --silent

echo "▶ 5/5 팀원 초대 (쓰기 권한)"
for user in "$@"; do
  gh api -X PUT "repos/$REPO/collaborators/$user" -f permission=push --silent
  echo "   초대 보냄: $user"
done

echo "✓ 끝. 팀원은 메일이나 GitHub 알림에서 초대를 수락해야 합니다."
