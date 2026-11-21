# 관리자 준비 체크리스트 (Issue로 만들지 않음)
## 작업 설명
팀원이 바로 개발을 시작할 수 있도록 앱 뼈대와 협업 문서·규칙·자동 검사를 세팅합니다.

## 할 일
- [x] Vite + React + TS 뼈대, domain(타입·저장·명단·예시 데이터), 화면 자리 3개
- [x] README · CONTRIBUTING · AGENTS · CLAUDE · docs(PRD·ARCHITECTURE·DOMAIN·adr)
- [x] Issue 폼 · PR 템플릿 · CI · CODEOWNERS · VS Code/Claude 설정
- [ ] 라벨·Issue 생성, main 보호 규칙, 팀원 초대, 짝 배정 (scripts/setup-github.sh 또는 웹)

## 완료 기준
- main에서 `npm run lint && npm run test && npm run build` 통과
- 팀원이 README만 보고 `npm run dev`까지 실행
