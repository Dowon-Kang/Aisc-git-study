import { describe, it, expect } from 'vitest';
import {
  createSession,
  validateSessionInput,
  DATE_REQUIRED_MESSAGE,
  TITLE_REQUIRED_MESSAGE,
} from './createSession';

const valid = { title: 'Git 기초', date: '2026-12-01', topic: 'commit' };

describe('AC-01 입력 검증', () => {
  it('빈 제목이면 제목 오류', () => {
    expect(validateSessionInput({ ...valid, title: '' })).toBe('일정 제목을 입력하세요.');
  });
  it('공백뿐인 제목이면 제목 오류', () => {
    expect(validateSessionInput({ ...valid, title: '   ' })).toBe(TITLE_REQUIRED_MESSAGE);
  });
  it('날짜가 비어 있으면 날짜 오류', () => {
    expect(validateSessionInput({ ...valid, date: '' })).toBe('날짜를 선택하세요.');
  });
  it('제목과 날짜가 모두 비면 제목 오류를 먼저 보인다', () => {
    expect(validateSessionInput({ title: '', date: '', topic: '' })).toBe(TITLE_REQUIRED_MESSAGE);
  });
  it('잘못된 입력으로는 일정이 만들어지지 않는다', () => {
    expect(() => createSession({ ...valid, title: ' ' }, 'id-1')).toThrow(TITLE_REQUIRED_MESSAGE);
    expect(() => createSession({ ...valid, date: '' }, 'id-1')).toThrow(DATE_REQUIRED_MESSAGE);
  });
  it('올바른 입력이면 오류 없음', () => {
    expect(validateSessionInput(valid)).toBeNull();
  });
});

describe('AC-02 일정 생성', () => {
  it('제목·주제의 앞뒤 공백을 지우고 출석자는 빈 배열로 만든다', () => {
    expect(createSession({ title: '  Git 기초 ', date: '2026-12-01', topic: ' commit ' }, 'id-1')).toEqual({
      id: 'id-1',
      title: 'Git 기초',
      date: '2026-12-01',
      topic: 'commit',
      attendees: [],
    });
  });
  it('주제는 비어 있어도 등록된다', () => {
    expect(createSession({ ...valid, topic: '' }, 'id-2').topic).toBe('');
  });
  it('기존 목록 맨 앞에 붙이면 개수가 1 늘고 기존 배열은 바뀌지 않는다', () => {
    const before = [createSession(valid, 'old')];
    const after = [createSession(valid, 'new'), ...before];
    expect(after).toHaveLength(2);
    expect(after[0].id).toBe('new');
    expect(before).toHaveLength(1);
  });
});
