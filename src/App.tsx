import { useState } from 'react';
import { SAMPLE_SESSIONS } from './domain/sample';
import { readSessions, saveSessions } from './domain/storage';
import type { Session } from './domain/types';
import './App.css';

export default function App() {
  const [sessions, setSessions] = useState<Session[]>(readSessions);
  const [storageError, setStorageError] = useState('');

  // 일정 목록을 바꾸는 모든 기능은 이 함수 하나로 화면 상태와 저장을 함께 처리합니다.
  function updateSessions(next: Session[]) {
    setSessions(next);
    setStorageError(saveSessions(next) ? '' : '브라우저 저장에 실패했습니다.');
  }

  return (
    <main className="hub">
      <header className="hub-head">
        <span className="eyebrow">AISC · GIT/GITHUB STUDY</span>
        <h1>AISC Study Hub</h1>
        <p>스터디 일정과 출석을 한곳에서 관리합니다. 같은 브라우저에만 저장됩니다.</p>
        <p className="count">등록된 일정 {sessions.length}개</p>
        {storageError && <p role="alert" className="error">{storageError}</p>}
      </header>

      <section className="card" aria-labelledby="form-title">
        <h2 id="form-title">일정 등록</h2>
        {/* Issue #2: 일정 등록 폼이 들어갈 자리 */}
        <p className="placeholder">#2 일정 등록 담당이 구현합니다.</p>
      </section>

      <section className="card" aria-labelledby="list-title">
        <h2 id="list-title">일정 목록</h2>
        {/* Issue #3: 일정 목록·검색이 들어갈 자리 */}
        <p className="placeholder">#3 일정 목록 담당이 구현합니다.</p>
      </section>

      <section className="card" aria-labelledby="attendance-title">
        <h2 id="attendance-title">출석 체크·통계</h2>
        {/* Issue #4: 출석 체크와 출석률 통계가 들어갈 자리 */}
        <p className="placeholder">#4 출석 담당이 구현합니다.</p>
      </section>

      <footer className="hub-foot">
        <button type="button" onClick={() => updateSessions(SAMPLE_SESSIONS)}>예시 데이터 넣기</button>
        <button type="button" onClick={() => updateSessions([])}>모두 지우기</button>
      </footer>
    </main>
  );
}
