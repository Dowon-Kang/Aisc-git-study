# ARCHITECTURE

형식 참고: 사람인 서버 [ARCHITECTURE.md](https://github.com/SOPT-all/39-COLLABORATION-SERVER-SARAMIN/blob/develop/docs/ARCHITECTURE.md)(계층별 책임·데이터 흐름), 사람인 웹 [AGENTS.md](https://github.com/SOPT-all/39-COLLABORATION-WEB-SARAMIN/blob/dev/AGENTS.md)(페이지 전용 vs 공통 폴더)

## 1. 기술 스택

React 19 · TypeScript · Vite · Vitest · oxlint · 저장은 브라우저 localStorage ([ADR-0001](adr/0001-localstorage-only.md))

## 2. 폴더와 소유자

```text
src/
├── main.tsx
├── App.tsx                    # 화면 조립 + 상태(sessions) + updateSessions     — 모두(자기 자리만)
├── App.css · index.css        # 공통 레이아웃                                    — 관리자
├── domain/                    # 데이터 모양·저장·명단                            — 관리자
│   ├── types.ts               #   Session, Member
│   ├── storage.ts             #   readSessions / saveSessions / parseSessions
│   ├── members.ts             #   MEMBERS
│   └── sample.ts              #   예시 데이터
└── features/                  # 기능별 폴더                                      — 각 담당자
    ├── session-form/          #   #2 팀원 A
    ├── session-list/          #   #3 팀원 B
    └── attendance/            #   #4 팀원 C
```

`domain/`을 바꿔야 하면 기능 PR에 섞지 말고, 관리자에게 따로 Issue로 요청합니다.

## 3. 데이터 흐름

```text
localStorage ──readSessions──▶ App의 sessions 상태 ──props──▶ 각 기능 컴포넌트
                                    ▲                              │
                                    └──── updateSessions(next) ◀───┘  (onAdd / onChange)
                                          ├─ setSessions(next)  화면 갱신
                                          └─ saveSessions(next) 저장
```

- 기능 컴포넌트는 `sessions`를 **props로 받고**, 바꾼 새 배열을 **콜백으로 올려 보냅니다**.
- localStorage는 `domain/storage.ts`만 다룹니다. 기능 코드에서 직접 부르지 않습니다.
- 배열은 직접 고치지 않고(push·splice 금지) 새 배열을 만듭니다.

## 4. 기능 폴더 규칙

| 파일 | 내용 |
| --- | --- |
| `<기능>.ts` | React 없는 순수 함수 (계산·검증) — 테스트 대상 |
| `<기능>.test.ts` | 그 순수 함수의 Vitest 테스트, AC마다 1개 이상 |
| `<컴포넌트>.tsx` | 화면. props 타입은 `<컴포넌트>Props` |
| `<기능>.css` (선택) | 기능 전용 스타일. App.css는 고치지 않습니다. **클래스 이름은 기능 이름으로 시작**합니다(`.session-form`, `.attendance-empty`). `.empty` 같은 짧은 전역 클래스는 다른 기능 화면까지 바꿉니다 |

## 5. 기능별 연결 약속 (App.tsx에서 이렇게 붙입니다)

| Issue | 순수 함수 | 컴포넌트 | App.tsx 연결 |
| --- | --- | --- | --- |
| #2 | `createSession(input, id): Session` | `SessionForm({ onAdd })` | `<SessionForm onAdd={s => updateSessions([s, ...sessions])} />` |
| #3 | `filterSessions(sessions, keyword): Session[]` | `SessionList({ sessions, memberCount })` | `<SessionList sessions={sessions} memberCount={MEMBERS.length} />` |
| #4 | `toggleAttendance(sessions, id, member)` · `attendanceRate(sessions, member)` | `AttendancePanel({ sessions, members, onChange })` | `<AttendancePanel sessions={sessions} members={MEMBERS} onChange={updateSessions} />` |

각자 App.tsx에서 **자기 Issue 주석이 있는 자리의 `<p className="placeholder">` 한 줄을 컴포넌트로 바꾸고**, 맨 위에 import를 추가합니다. 세 명 모두 import 줄을 추가하므로, 뒤에 머지되는 PR은 이 부분에서 충돌이 날 수 있습니다. 충돌 해결 방법은 CONTRIBUTING.md 6절을 봅니다.

## 6. 검사

- 로컬: `npm run lint && npm run test && npm run build`
- CI(.github/workflows/ci.yml): PR과 main push마다 같은 세 가지
- 테스트는 순수 함수 위주. 화면 동작은 PRD의 통합 확인표로 사람이 확인합니다.
