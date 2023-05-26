import React, { memo } from "react";
// 부모가준 props 의 값을 자식이 바꾸지 않는다.
// 정바꾸고싶다면, state로 선언한 후 바꾼다..
const Try = memo(({ tryInfo }) => {
  const [result, setResult] = useState(tryInfo.result);
  const onClick = () => {
    setResult("1");
  };
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div onClick={onClick}>{result}</div>
    </li>
  );
});

export default Try;
