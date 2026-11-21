# 협업 규칙

이 저장소에서 모두가 지키는 협업 규칙입니다. 처음 한 번 끝까지 읽고, 헷갈리면 다시 찾아봅니다.

## 1. 작업 흐름

```text
짝과 주 작성자 정하기 → Issue 확인 → 최신 main에서 브랜치 → 문서 읽고 계획 → 구현·테스트 → 커밋 → push
→ PR (Closes #번호) → CI 통과 → 짝 + 다른 짝 리뷰, 1명 이상 Approve → 관리자가 머지 → 브랜치 삭제
```

**주 작성자 정하기**: 짝은 Issue 두 개를 함께 받습니다. 시작 전에 둘이 하나씩 나눠 맡고, 각 Issue에 아래처럼 댓글을 남깁니다. 주 작성자가 그 Issue의 브랜치·커밋·PR을 맡고, 짝은 첫 리뷰어가 됩니다.

```text
주 작성자: @내아이디 · 리뷰: @짝아이디
```

## 2. 브랜치

- `main`은 직접 push 금지. 모든 변경은 PR로 들어갑니다.
- 작업 브랜치는 **최신 main**에서 `타입/기능명`(영어 소문자, kebab-case)으로 만듭니다.

```bash
git switch main
git pull origin main
git switch -c feat/session-form
```

| 좋은 예 | 나쁜 예 |
| --- | --- |
| `feat/session-form` · `fix/empty-title` · `docs/readme-commands` | `Feat/Form`(대문자) · `my-branch`(타입 없음) · `feat/일정등록`(한글) |

이슈 번호는 브랜치 이름에 넣지 않고, PR 본문의 `Closes #번호`로 연결합니다.

## 3. 커밋 메시지

`타입: 작업 내용` — 한국어로 무엇을 했는지 구체적으로, 마침표 없이, 기능 단위로 작게.

| 타입 | 언제 | 예 |
| --- | --- | --- |
| `feat` | 새 기능 | `feat: 일정 등록 폼 추가` |
| `fix` | 버그 수정 | `fix: 빈 제목이 등록되는 문제 수정` |
| `test` | 테스트 추가·수정 | `test: 출석률 계산 테스트 추가` |
| `refactor` | 동작은 같고 구조 개선 | `refactor: 검색 함수 분리` |
| `style` | 화면 스타일 | `style: 일정 카드 간격 조정` |
| `docs` | 문서 | `docs: 실행 방법 보완` |
| `chore` | 설정·패키지 | `chore: VS Code 작업 설정 추가` |
| `init` | 초기 세팅 | `init: 협업 저장소 초기 세팅` |
| `rename` · `remove` | 파일 이름 변경·삭제 | `rename: List를 SessionList로 변경` |

나쁜 예: `수정` · `update` · `feat: 작업` · `fix: 버그수정.`

## 4. Pull Request

- 제목은 커밋과 같은 형식: `feat: 일정 등록 폼 추가`
- 본문은 템플릿을 모두 채우고, `Closes #번호`로 Issue를 연결합니다.
- 한 PR에는 한 Issue만. 다른 사람 기능 폴더는 건드리지 않습니다.
- PR을 올리면 리뷰어로 **내 짝 + 다른 짝 1명 이상**을 지정합니다. 짝이 먼저 리뷰하고, 다른 짝은 처음 보는 사람의 눈으로 실행해 봅니다.

## 5. 리뷰

리뷰어는 Files changed에서 줄 옆 `+`로 코멘트를 남깁니다. 고칠 코드는 `suggestion` 블록으로 제안하면 작성자가 버튼으로 바로 반영할 수 있습니다.

| 볼 것 | 질문 |
| --- | --- |
| AC | Issue의 AC를 직접 실행해 보니 그대로 되는가? |
| 범위 | 내 기능 폴더·App.tsx 내 자리 밖의 파일이 바뀌지 않았나? |
| 테스트 | AC마다 확인하는 테스트가 있는가? |
| 규칙 | 이름·`type`·`key`·커밋 메시지 규칙을 지켰나? |
| 화면 | 브랜치를 받아 `npm run dev`로 직접 눌러 봤나? 좁은 화면에서 글자·버튼이 깨지지 않나? |

코멘트 말투: 빨리, 부드럽게, 근거와 함께. 예) "빈 제목일 때 버튼을 눌러 보니 그대로 등록돼요. AC-01에 따라 막아야 할 것 같아요."

작성자는 코멘트마다 답글이나 수정 커밋으로 응답하고, 해결되면 **Resolve conversation**을 누릅니다.

## 6. 머지와 정리

- 머지는 관리자가 합니다. 순서: **Issue #2 → #3 → #4 → #5**의 PR 순서(준비된 PR부터 이 순서로). PR과 Issue는 번호를 함께 쓰기 때문에 PR 번호는 Issue 번호와 다릅니다. 머지 순서는 PR 본문의 `Closes #번호`로 확인합니다.
- 앞 PR이 머지되면 뒤 PR 담당자는 자기 브랜치에서 최신 main을 반영하고, 충돌이 나면 해결 후 다시 push합니다.

```bash
git fetch origin
git merge origin/main
# 충돌 파일 열기 → <<<<<<< ======= >>>>>>> 사이에서 두 쪽을 모두 살려 정리
git diff --name-only --diff-filter=U   # 비어 있으면 해결 끝
npm run lint && npm run test && npm run build
git add src/App.tsx
git commit --no-edit
git push
```

- `App.tsx` 맨 위 import 줄은 네 기능 모두 추가하므로 충돌이 거의 확실히 납니다. 정답은 보통 “두 쪽 import를 모두 남기기”입니다. 두 사람이 **똑같은 줄**을 추가했다면(예: `MEMBERS` import) Git이 알아서 하나로 합칩니다.
- 머지 후 브랜치는 삭제합니다.
