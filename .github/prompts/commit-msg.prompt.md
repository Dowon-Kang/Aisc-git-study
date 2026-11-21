---
description: staged 변경으로 커밋 메시지와 PR 본문을 쓴다 (P16)
agent: agent
argument-hint: 연결할 Issue 번호
---
git diff --staged를 읽고 AGENTS.md의 커밋 규칙대로 커밋 메시지 한 줄을 제안해.
PR 본문은 작업 내용 / 확인 방법(실행한 명령) / 스크린샷 자리 / Closes #${input:issue:Issue 번호} 로 써.
diff에 없는 변경은 쓰지 말고, 의도가 두 가지면 커밋을 나누자고 말해 줘. 커밋은 하지 마.
