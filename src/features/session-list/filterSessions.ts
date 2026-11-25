import type { Session } from '../../domain/types';

/**
 * 검색어로 일정을 필터링하고 날짜 최신순(내림차순)으로 정렬한 새 배열을 반환합니다.
 * 제목과 주제만 검색 대상이며, 대소문자와 앞뒤 공백은 무시합니다.
 */
export function filterSessions(sessions: Session[], keyword: string): Session[] {
  const normalized = keyword.trim().toLowerCase();

  const matched = normalized
    ? sessions.filter(
        session =>
          session.title.toLowerCase().includes(normalized) ||
          session.topic.toLowerCase().includes(normalized),
      )
    : [...sessions];

  return matched.sort((a, b) => {
    if (b.date > a.date) return 1;
    if (b.date < a.date) return -1;
    return 0;
  });
}
