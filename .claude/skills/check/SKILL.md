---
name: check
description: lint, test, build를 순서대로 실행하고 결과를 표로 보고한다
disable-model-invocation: true
---
아래 명령을 순서대로 실행해. 하나가 실패하면 거기서 멈춰.

1. `npm run lint`
2. `npm run test`
3. `npm run build`

결과는 | 명령 | 결과(통과/실패) | 핵심 출력 한 줄 | 표로 보고해.
실패했다면 첫 번째 오류 메시지와 원인 후보 2개를 적고, 고치기 전에 고칠지 물어봐.
