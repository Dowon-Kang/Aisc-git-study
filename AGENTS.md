# AI 에이전트 작업 규칙

Copilot·Codex는 이 파일을, Claude Code는 CLAUDE.md를 통해 이 파일을 읽습니다. 규칙은 여기 한 곳에만 둡니다.

## 먼저 읽을 것
1. 작업할 Issue 본문과 AC 번호
2. `docs/PRD.md`(해당 기능 절), `docs/ARCHITECTURE.md`, `docs/DOMAIN.md`
3. 결정이 걸린 부분은 `docs/adr/`. 미결 사항(OQ)은 임의로 정하지 말고 사용자에게 묻는다.

## 범위
- Issue 하나의 AC만 구현한다. 내 기능 폴더 `src/features/<기능>/`과 `App.tsx`의 내 자리만 바꾼다.
- `src/domain/`, `docs/`, `.github/`, `package.json`은 바꾸지 않는다. 필요하면 이유를 먼저 보고한다.
- 새 패키지 설치는 먼저 확인받는다.
- 일정 목록을 바꿀 때는 `App.tsx`의 `updateSessions`만 쓴다. localStorage를 직접 부르지 않는다.

## 검사와 보고
- `npm run lint`, `npm run test`, `npm run build`를 실제로 실행하고 출력을 보여 준다.
- 실행하지 않은 검사를 통과했다고 쓰지 않는다. 확인 못 한 것은 따로 적는다.

## Git
- 커밋·push·PR 생성은 사용자가 요청할 때만 한다.
- 브랜치 `타입/기능명`, 커밋 `타입: 작업 내용`(한국어, 마침표 없음). 자세한 규칙은 CONTRIBUTING.md.

## 코드
- 컴포넌트 PascalCase, 함수·변수 camelCase, 이벤트 핸들러 `handle~`, Props로 넘길 때 `on~`
- 리스트 key는 고유 id, `button`에는 `type`, 타입만 가져올 때 `import type`
- 비밀키·개인정보를 코드와 커밋에 넣지 않는다.
