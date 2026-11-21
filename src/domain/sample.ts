// 개발 중 화면 확인용 예시 데이터. "예시 데이터 넣기" 버튼에서만 씁니다.
import type { Session } from './types';

export const SAMPLE_SESSIONS: Session[] = [
  { id: 'sample-1', title: 'Git 기초', date: '2026-12-01', topic: 'commit · branch', attendees: ['도원', '민지', '서준'] },
  { id: 'sample-2', title: 'GitHub 협업', date: '2026-12-08', topic: 'PR · 리뷰', attendees: ['도원', '하은'] },
  { id: 'sample-3', title: '충돌 해결', date: '2026-12-15', topic: 'merge conflict', attendees: [] },
];
