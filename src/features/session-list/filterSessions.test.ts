import { describe, it, expect } from 'vitest';
import type { Session } from '../../domain/types';
import { filterSessions } from './filterSessions';

const SAMPLE: Session[] = [
  { id: '1', title: 'Git 기초', date: '2026-12-01', topic: 'commit · branch', attendees: ['도원', '민지'] },
  { id: '2', title: '충돌 해결', date: '2026-12-15', topic: 'merge conflict', attendees: [] },
  { id: '3', title: 'GitHub 협업', date: '2026-12-08', topic: 'PR · 리뷰', attendees: ['도원', '하은', '서준'] },
];

describe('일정 목록 필터링과 정렬', () => {
  it('AC-03: 검색어가 비어 있거나 공백뿐이면 전체 일정을 반환한다', () => {
    const result = filterSessions(SAMPLE, '   ');
    expect(result.map(s => s.id)).toEqual(['2', '3', '1']);
  });

  it('AC-03: 제목과 주제에서 대소문자·앞뒤 공백을 무시하고 검색한다', () => {
    expect(filterSessions(SAMPLE, '  git  ').map(s => s.id)).toEqual(['3', '1']);
    expect(filterSessions(SAMPLE, ' CONFLICT ').map(s => s.id)).toEqual(['2']);
  });

  it('AC-03: 출석자 이름은 검색 대상에 포함하지 않는다', () => {
    expect(filterSessions(SAMPLE, '도원')).toEqual([]);
  });

  it('AC-03: 일치하는 일정이 없으면 빈 배열을 반환한다', () => {
    expect(filterSessions(SAMPLE, 'react')).toEqual([]);
  });

  it('AC-04: 날짜가 늦은 일정이 위에 오며 같은 날짜는 기존 순서를 유지한다', () => {
    const sameDateSessions: Session[] = [
      { id: 'a', title: '먼저 등록', date: '2026-12-10', topic: '', attendees: [] },
      { id: 'b', title: '더 늦은 일정', date: '2026-12-20', topic: '', attendees: [] },
      { id: 'c', title: '나중에 등록', date: '2026-12-10', topic: '', attendees: [] },
    ];

    const result = filterSessions(sameDateSessions, '');
    expect(result.map(s => s.id)).toEqual(['b', 'a', 'c']);
  });

  it('원본 sessions 배열을 변경하지 않는다', () => {
    const original = [...SAMPLE];
    filterSessions(original, '');
    expect(original.map(s => s.id)).toEqual(['1', '2', '3']);
  });
});
