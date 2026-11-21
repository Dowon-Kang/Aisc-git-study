import { describe, it, expect } from 'vitest';
import { parseSessions } from './storage';

describe('저장 데이터 읽기', () => {
  it('값이 없으면 빈 목록', () => expect(parseSessions(null)).toEqual([]));
  it('깨진 JSON은 빈 목록', () => expect(parseSessions('{broken')).toEqual([]));
  it('모양이 틀린 항목은 버린다', () => {
    const raw = JSON.stringify([
      { id: '1', title: 'Git 기초', date: '2026-12-01', topic: 'commit', attendees: ['도원'] },
      { id: '2', title: 42 },
    ]);
    expect(parseSessions(raw).map(s => s.id)).toEqual(['1']);
  });
});
