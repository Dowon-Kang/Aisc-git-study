feat: 일정 등록 폼
labels: feat
---
## 작업 설명
스터디 일정을 등록하는 폼을 만듭니다. (PRD 5절 #2)

## 할 일
- [ ] `src/features/session-form/createSession.ts` — `createSession(input, id): Session` (제목·날짜 검증, 공백 제거, attendees는 빈 배열)
- [ ] `createSession.test.ts` — AC-01·02 테스트
- [ ] `SessionForm.tsx` — 제목·날짜(type="date")·주제 입력, 등록 버튼, 오류 메시지(role="alert")
- [ ] App.tsx `Issue #2` 자리에 `<SessionForm onAdd={s => updateSessions([s, ...sessions])} />`

## 수용 조건
- [ ] AC-01 빈 제목·공백 제목이면 `일정 제목을 입력하세요.`, 날짜가 없으면 `날짜를 선택하세요.`, 등록되지 않음
- [ ] AC-02 등록하면 개수 +1, 입력칸 비워짐, 새로고침해도 유지

## 브랜치 · 바꿀 파일
`feat/session-form` · `src/features/session-form/*`, `src/App.tsx`(내 자리와 import만)

## 하지 않는 것
일정 수정·삭제(OQ-01), domain 파일 변경
