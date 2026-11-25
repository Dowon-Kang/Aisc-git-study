import { useState } from 'react';
import type { ChangeEvent } from 'react';
import type { Session } from '../../domain/types';
import { filterSessions } from './filterSessions';
import './SessionList.css';

export type SessionListProps = {
  sessions: Session[];
  memberCount: number;
};

export function SessionList({ sessions, memberCount }: SessionListProps) {
  const [keyword, setKeyword] = useState('');
  const filteredSessions = filterSessions(sessions, keyword);

  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  return (
    <div className="session-list">
      <div className="session-list-search-box">
        <label htmlFor="session-list-search" className="session-list-search-label">
          일정 검색
        </label>
        <input
          id="session-list-search"
          type="search"
          className="session-list-search"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="제목 또는 주제로 검색"
        />
      </div>

      {filteredSessions.length === 0 ? (
        <p className="session-list-empty">검색 결과가 없습니다.</p>
      ) : (
        <ul className="session-list-items">
          {filteredSessions.map(session => (
            <li key={session.id} className="session-list-item">
              <div className="session-list-item-head">
                <span className="session-list-date">{session.date}</span>
                <span className="session-list-attendance">
                  출석 {session.attendees.length}/{memberCount}
                </span>
              </div>
              <h3 className="session-list-title">{session.title}</h3>
              {session.topic && <p className="session-list-topic">{session.topic}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
