import { useRef, useEffect } from "react";

// const [isRunning,setRunning] = useState(true);
// useInterval(()=>{
//     console.log('hello')
// },isRunning ? 1000 : null);

function useInterval(callback, delay) {
  // 항상 최신 객체를 참조
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  // 1초 뒤에 가위
  //
  // 2초 뒤에 바위
  // 3초 뒤에 보
  useEffect(() => {
    console.log("isRunning", delay);
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);

  return savedCallback.current;
}

export default useInterval;
