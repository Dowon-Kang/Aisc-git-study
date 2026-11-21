// localStorage 읽기·쓰기. 기능 담당자는 이 파일을 고치지 않고 updateSessions를 통해 저장합니다.
import type { Session } from './types';

export const STORAGE_KEY = 'aisc-study-hub-v1';

function isSession(value: unknown): value is Session {
  if (typeof value !== 'object' || value === null) return false;
  const s = value as Record<string, unknown>;
  return typeof s.id === 'string' && typeof s.title === 'string' &&
    typeof s.date === 'string' && typeof s.topic === 'string' &&
    Array.isArray(s.attendees) && s.attendees.every(a => typeof a === 'string');
}

export function parseSessions(raw: string | null): Session[] {
  if (!raw) return [];
  try {
    const value: unknown = JSON.parse(raw);
    return Array.isArray(value) ? value.filter(isSession) : [];
  } catch {
    return [];
  }
}

export function readSessions(): Session[] {
  try { return parseSessions(window.localStorage.getItem(STORAGE_KEY)); }
  catch { return []; }
}

export function saveSessions(sessions: Session[]): boolean {
  try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions)); return true; }
  catch { return false; }
}
