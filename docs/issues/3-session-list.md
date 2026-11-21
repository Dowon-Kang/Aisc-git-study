feat: 일정 목록과 검색
labels: feat
---
## 작업 설명
등록된 일정을 최신순으로 보여 주고 제목·주제로 검색합니다. (PRD 5절 #3)

## 할 일
- [ ] `src/features/session-list/filterSessions.ts` — `filterSessions(sessions, keyword): Session[]` (대소문자·앞뒤 공백 무시, 날짜 최신순, 원본 배열 변경 금지)
- [ ] `filterSessions.test.ts` — AC-03·04 테스트
- [ ] `SessionList.tsx` — 검색 입력, 항목마다 날짜·제목·주제·`출석 n/전체`, 결과 없음 문구
- [ ] App.tsx `Issue #3` 자리에 `<SessionList sessions={sessions} memberCount={MEMBERS.length} />`

## 수용 조건
- [ ] AC-03 검색어가 제목이나 주제에 들어간 일정만, 없으면 `검색 결과가 없습니다.`
- [ ] AC-04 날짜 늦은 것이 위, 항목에 날짜·제목·주제·`출석 2/4` 형식

## 브랜치 · 바꿀 파일
`feat/session-list` · `src/features/session-list/*`, `src/App.tsx`(내 자리와 import만)

## 하지 않는 것
지난/예정 일정 구분(OQ-02), 출석자 이름 검색
