import React, { useRef, useState } from "react";
const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요');
  const [result, setResult] = useState([]);
  // ref -> this.의 속성을 표현하는데 쓰인다
  // ref -> 화면을 바꾸고 싶지는 않는데 값이 자주 바뀌는 것들을 쓸때 유용..
  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();


  const onClickScreen = () => {
      if (state === "waiting") {
        setState("ready");
        setMessage('초록색이 되면 클릭하세요.')
        timeout.current = setTimeout(() => {
          setState("now");
          setMessage('지금 클릭')
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2초 ~ 3초 랜덤
    } else if (state === "ready") {
      clearTimeout(timeout.current);
        setState("waiting");
        setMessage('너무 성급하시군요!초록색이 된 후에 클릭하세요!');

      // 성급하게 클릭
    } else if (state === "now") {
      // 반응속도체크
        endTime.current = new Date();
        setState('waiting');
        setMessage('클릭해서 시작하세요!')
        setResult((prevResult) => {
          return [...prevResult,endTime.current - startTime.current]
        })
    }
  }

  const renderAverage = () => {
    return result.length === 0
      ? null
      : result.reduce((a, c) => a + c) / result.length;
  };

  const onReset = () => {
    setResult([]);
  }

  
    return (
      <>
        <div
          id="screen"
          className={state}
          onClick={onClickScreen}
        >
          {message}
        </div>
        <div>
          평균 시간:
          {renderAverage()}
          ms
          {/* &&
           {this.state.result.length !== 0
            &&
           (this.state.result.reduce((a, c) => a + c) /
              this.state.result.length)} */}
          {/* 즉시실행함수 {(() => {
            if (result.length === 0) {
              return null;
            } else {
              return result.reduce((a, c) => a + c) / result.length;
            }
          })()} */}
        </div>
        <button onClick={onReset}>reset</button>
      </>
    );
  
}

export default ResponseCheck;
