// 일정 등록 폼의 순수 함수(검증·생성). React를 쓰지 않으며 테스트 대상이다.
import type { Session } from '../../domain/types';

export type SessionInput = {
  title: string;
  date: string;
  topic: string;
};

export const TITLE_REQUIRED_MESSAGE = '일정 제목을 입력하세요.';
export const DATE_REQUIRED_MESSAGE = '날짜를 선택하세요.';

// 입력이 올바르면 null, 아니면 화면에 보일 오류 메시지를 돌려준다. 제목을 먼저 검사한다.
export function validateSessionInput(input: SessionInput): string | null {
  if (input.title.trim() === '') return TITLE_REQUIRED_MESSAGE;
  if (input.date.trim() === '') return DATE_REQUIRED_MESSAGE;
  return null;
}

// 검증을 통과한 입력으로 새 일정을 만든다. 잘못된 입력이면 오류를 던진다.
export function createSession(input: SessionInput, id: string): Session {
  const error = validateSessionInput(input);
  if (error) throw new Error(error);
  return {
    id,
    title: input.title.trim(),
    date: input.date.trim(),
    topic: input.topic.trim(),
    attendees: [],
  };
}
