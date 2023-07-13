import * as React from "react";
import { useState, useRef, useCallback } from "react";

const ResponseCheck = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작하세요.");
  const [result, setResult] = useState<number[]>([]);
  const timeout = useRef<number | null>(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onReset = useCallback(() => {
    setResult([]);
  }, []);

  const onClickScreen = useCallback(() => {
    if (state === "waiting") {
      setState("ready");
      setMessage("초록색이 되면 클릭하세요.");
      timeout.current = window.setTimeout(() => {
        setState("now");
        setMessage("지금 클릭");
        startTime.current = new Date().getTime();
      }, Math.floor(Math.random() * 1000) + 2000); // 2초 ~ 3초 랜덤
    } else if (state === "ready") {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }

      setState("waiting");
      setMessage("너무 성급하시군요!초록색이 된 후에 클릭하세요!");

      // 성급하게 클릭
    } else if (state === "now") {
      // 반응속도체크
      endTime.current = new Date().getTime();
      setState("waiting");
      setMessage("클릭해서 시작하세요!");
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  }, [state]);

  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={onReset}>리셋</button>
      </>
    );
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  );
};

export default ResponseCheck;
