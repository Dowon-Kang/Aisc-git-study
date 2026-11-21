feat: 스터디 요약 카드
labels: feat
---
## 작업 설명
화면 맨 위에 스터디 현황을 한눈에 보여 주는 요약 카드 세 개를 만듭니다. (PRD 5절 #5, DOMAIN “평균 출석 인원·가장 최근 일정”)

## 할 일
- [ ] `src/features/summary/summarizeSessions.ts` — `summarizeSessions(sessions): { total: number; averageAttendees: number; latest: Session | null }`
- [ ] `summarizeSessions.test.ts` — AC-07·08 테스트 (일정 0개, 같은 날짜, 소수 반올림)
- [ ] `SummaryCards.tsx` — 카드 세 개: 전체 일정 수 · 평균 출석 인원(`1.7명`) · 가장 최근 일정(날짜·제목)
- [ ] App.tsx `Issue #5` 자리에 `<SummaryCards sessions={sessions} />`

## 수용 조건
- [ ] AC-07 전체 일정 수, 일정당 평균 출석 인원(소수 첫째 자리), 가장 최근 일정의 날짜·제목
- [ ] AC-08 일정이 없으면 `0개` · `0.0명` · `—`, 등록·출석 체크 시 바로 반영

## 브랜치 · 바꿀 파일
`feat/summary-cards` · `src/features/summary/*`, `src/App.tsx`(내 자리와 import만)

## 하지 않는 것
지난/예정 일정 구분(OQ-02), 그래프, domain 파일 변경
