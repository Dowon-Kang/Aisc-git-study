---
description: 승인한 계획대로 Issue의 AC만 구현한다 (P08)
agent: agent
argument-hint: "Issue 번호와 AC 번호 (예: 2 AC-01·02)"
---
AGENTS.md를 따라, 내가 승인한 계획대로 Issue #${input:issue:Issue 번호}의 ${input:ac:AC 번호}만 구현해.
범위 밖 파일 수정, 새 패키지, 커밋·push는 하지 마.
끝나면 npm run lint, npm run test, npm run build를 실행하고
실제 명령과 출력 / git diff --stat / 확인 못 한 것을 나눠서 보여 줘.
