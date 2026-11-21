# AISC Study Hub

전공 소학회 AISC의 **Git·GitHub 협업 스터디 실습 저장소**입니다.
관리자가 협업에 필요한 문서·규칙·자동 검사를 미리 세팅해 두었고, 팀원은 **두 명씩 짝**을 지어 짝마다 기능 두 개를 맡아 각자 브랜치에서 개발하고 PR·리뷰·머지까지 진행합니다.

> 만드는 앱: 스터디 일정 등록 · 일정 목록과 검색 · 출석 체크와 출석률 통계 · 스터디 요약 카드 (React + Vite + TypeScript, 브라우저 localStorage 저장)

## 팀과 역할

| 역할 | 담당 | Issue | 브랜치 |
| --- | --- | --- | --- |
| 관리자 | 저장소·규칙·리뷰·머지 순서 | — | main에 통합 커밋 |
| 짝 1 (@imj97393 · @jobsa47) | 일정 등록 | #2 | `feat/session-form` |
| 짝 1 (@imj97393 · @jobsa47) | 일정 목록·검색 | #3 | `feat/session-list` |
| 짝 2 (@jjj-bang · @tree031014-sketch) | 출석 체크·통계 | #4 | `feat/attendance` |
| 짝 2 (@jjj-bang · @tree031014-sketch) | 스터디 요약 카드 | #5 | `feat/summary-cards` |

**짝 진행 방법**: 짝의 두 기능 중 하나씩 맡아 **주 작성자**가 됩니다(누가 어느 것을 맡을지는 짝끼리 정해 Issue 댓글로 남기기). 주 작성자가 PR을 올리면 **짝이 먼저 리뷰**하고, 다른 짝에서도 1명 이상 리뷰합니다.

## 시작하기

```bash
git clone https://github.com/Dowon-Kang/Aisc-git-study.git
cd Aisc-git-study
nvm use          # Node 22 (.nvmrc) — nvm이 없으면 Node 22 이상이면 됩니다
npm install
npm run dev      # http://localhost:5173
```

화면 아래 **예시 데이터 넣기** 버튼으로 샘플 일정 3개를 넣어 확인할 수 있습니다.

## 명령어

| 명령 | 하는 일 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run lint` | 코드 규칙 검사 (oxlint) |
| `npm run test` | 단위 테스트 (Vitest) |
| `npm run build` | 타입 검사 + 배포용 빌드 |

PR을 올리면 GitHub Actions가 `lint → test → build`를 자동으로 실행합니다.

## 먼저 읽을 문서

1. [CONTRIBUTING.md](CONTRIBUTING.md) — 브랜치·커밋·PR·리뷰 규칙
2. [docs/PRD.md](docs/PRD.md) — 무엇을 왜 만드는지, 기능별 수용 조건(AC)
3. [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — 폴더 구조와 기능 붙이는 방법
4. [docs/DOMAIN.md](docs/DOMAIN.md) — 용어 정의와 미결 사항
5. [AGENTS.md](AGENTS.md) — AI 도구에게 주는 작업 규칙

## 폴더 구조

```text
src/
├── App.tsx            # 네 기능을 조립하는 화면 (모두가 한 번씩 수정)
├── domain/            # 데이터 모양·저장 (관리자 소유)
└── features/          # 기능별 폴더 (담당자 소유)
docs/                  # PRD · ARCHITECTURE · DOMAIN · adr · issues
.github/               # Issue·PR 템플릿, CI
.vscode/  .claude/     # 에디터·AI 도구 설정
```

## 팀원 소개

자기 소개는 이 표에 한 줄씩 추가합니다. (PR 연습용 — 브랜치를 만들어 PR로 올려 주세요)

| 이름 | 담당 | 한마디 |
| --- | --- | --- |
| 강도원 | 관리자 | 협업 규칙과 리뷰를 맡습니다 |
