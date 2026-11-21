feat: 공강 계산과 바쁜 시간 확인 그리드
labels: feat
---
## 작업 설명
멤버별 바쁜 시간을 그리드에 칠하고, 모두가 비는 시간대를 계산해 보여 줍니다. 캡처 인식(FREE-2) 전에 이 기능만으로도 쓸 수 있어야 합니다. (ROADMAP 5절)

## 할 일
- [ ] 데이터 모양 ADR(상태: 제안): `BusyBlock { member, day, start, end }`, 30분 단위, 저장 위치
- [ ] `src/features/free-slots/findCommonFreeSlots.ts` — `findCommonFreeSlots(blocks, members, { from, to, minMinutes })`
- [ ] 테스트: 겹치는 블록, 경계(끝 시각 = 다음 시작), 하루 종일 바쁨, 멤버 0명, 최소 시간 미만 제외
- [ ] `BusyGrid.tsx` — 요일 × 30분 칸, 멤버 선택 후 드래그·클릭으로 칠하기/지우기
- [ ] `FreeSlotList.tsx` — 공강 목록(요일·시간·길이), 누르면 일정 등록 폼에 날짜·시간 채우기

## 수용 조건
- [ ] 두 명의 바쁜 시간을 칠하면 둘 다 비는 60분 이상 시간대만 목록에 보인다
- [ ] 한 칸을 지우거나 칠하면 목록이 바로 바뀐다
- [ ] 새로고침해도 칠한 내용이 남는다
- [ ] 기존 통합 확인표 1~7이 그대로 통과한다

## 하지 않는 것
이미지 업로드·인식(FREE-2), 날짜별 예외(특정 주만 바쁨)
