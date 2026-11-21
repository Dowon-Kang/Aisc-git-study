---
applyTo: "src/**/*.tsx"
---
- 컴포넌트 이름은 PascalCase, 이벤트 핸들러는 handle~, Props로 넘길 때는 on~ (예: handleSubmit, onAdd)
- 리스트 key에는 session.id 같은 고유 id를 쓰고 index·랜덤 값은 쓰지 않는다
- button에는 항상 type을 적는다
- 타입만 가져올 때는 import type을 쓴다
- 일정 목록은 props로 받고, 바꾼 새 배열은 콜백(onAdd·onChange)으로 올려 App의 updateSessions가 저장하게 한다
