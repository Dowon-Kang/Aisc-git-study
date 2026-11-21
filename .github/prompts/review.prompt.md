---
description: PR diff를 Issue의 AC 기준으로 리뷰한다 (P17)
agent: ask
argument-hint: Issue 번호
---
현재 브랜치의 변경을 Issue #${input:issue:Issue 번호}의 AC 기준으로 리뷰해.
AC가 모두 구현됐는지, AC마다 테스트가 있는지, 범위 밖 변경이 없는지 확인해.
문제마다 파일·줄, 재현 방법, 고칠 코드를 적고, 정확성·요구사항과 관계없는 취향 지적은 빼.
