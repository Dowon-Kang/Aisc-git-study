feat: 출석 체크와 출석률 통계
labels: feat
---
## 작업 설명
일정을 골라 멤버 출석을 체크하고, 멤버별 출석률을 보여 줍니다. (PRD 5절 #4, ADR-0002)

## 할 일
- [ ] `src/features/attendance/attendance.ts` — `toggleAttendance(sessions, sessionId, member): Session[]`, `attendanceRate(sessions, member): number`
- [ ] `attendance.test.ts` — AC-05·06 테스트 (일정 0개일 때 0 포함)
- [ ] `AttendancePanel.tsx` — 일정 선택(select), 멤버 체크박스, 멤버별 출석 횟수·출석률 표
- [ ] App.tsx `Issue #4` 자리에 `<AttendancePanel sessions={sessions} members={MEMBERS} onChange={updateSessions} />`

## 수용 조건
- [ ] AC-05 체크·해제가 바로 저장되고 일정 목록의 출석 인원도 바뀜
- [ ] AC-06 멤버별 출석 횟수와 출석률(반올림 정수 %), 일정이 없으면 `아직 일정이 없습니다.`

## 브랜치 · 바꿀 파일
`feat/attendance` · `src/features/attendance/*`, `src/App.tsx`(내 자리와 import만)

## 하지 않는 것
미래 일정 제외 계산(ADR-0002), domain 파일 변경
