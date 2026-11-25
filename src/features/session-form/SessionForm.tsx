import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Session } from '../../domain/types';
import { createSession, validateSessionInput } from './createSession';
import './session-form.css';

export type SessionFormProps = {
  onAdd: (session: Session) => void;
};

export function SessionForm({ onAdd }: SessionFormProps) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [topic, setTopic] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = { title, date, topic };
    const message = validateSessionInput(input);
    if (message) {
      setError(message);
      return;
    }
    onAdd(createSession(input, crypto.randomUUID()));
    setTitle('');
    setDate('');
    setTopic('');
    setError('');
  }

  return (
    <form className="session-form" onSubmit={handleSubmit} noValidate>
      <label className="session-form-field">
        제목
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="예: Git 기초" />
      </label>
      <label className="session-form-field">
        날짜
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </label>
      <label className="session-form-field">
        주제 (선택)
        <input type="text" value={topic} onChange={e => setTopic(e.target.value)} placeholder="예: commit · branch" />
      </label>
      {error && <p role="alert" className="error session-form-error">{error}</p>}
      <button type="submit" className="session-form-submit">등록</button>
    </form>
  );
}
