// 팀 전체가 함께 쓰는 데이터 모양입니다. 바꾸려면 먼저 docs/DOMAIN.md와 ADR을 고칩니다.
export type Member = string;

export type Session = {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  topic: string;
  attendees: Member[];
};
