<<<<<<< HEAD
import React, { Component } from 'react';


// 클래스의 경우 -> constructor -> render ->  ref -> componentDidMount
// -> (setState / props) 바뀔때 -> shouldComponentUpdate(true) -> render -> componentDidUpdate
// 부모가 나를 없앴을때 -> componentWillUnmount -> 소멸
const rspCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
};
=======
import React, { useEffect, useRef, useState } from "react";

// 클래스의 경우 -> constructor -> render -> ref -> componentDidMount
// (setState/props 바뀔때) -> shouldComponentUpdate(true) -> render -> componentDidUpdate
// 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸

const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
};

>>>>>>> 390d6b6784f8d8d7de5b10b125bf439210a8dbf6
const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};
<<<<<<< HEAD
class RSP extends Component {
    state = {
        result: '',
        imgCoord: rspCoords.바위,
        score:0
    };

    
    interval;

    // mounted 시 실행, 리렌더링일때는 실행안됨
    // 컴포넌트가 첫 렌더링 된 후 -> 비동기 요청을 많이 해요
    componentDidMount() { 
        this.interval = setInterval(() => {
            const { imgCoord } = this.state;
            console.log('hello',imgCoord,rspCoords)
            if (imgCoord === rspCoords.바위) {
                this.setState({imgCoord:rspCoords.가위})
            } else if (imgCoord === rspCoords.가위) {
                 this.setState({imgCoord:rspCoords.보})
            } else if (imgCoord === rspCoords.보) {
                this.setState({imgCoord:rspCoords.바위})
            }
        }, 1000);
    }

    componentDidUpdate() { // 리렌더링 후 
       
    }
    
    onClickBtn = (choice) => {
    
    };

    // 컴포넌트 제거되기직전 -> 비동기 요청 정리를 많이 해요
    componentWillUnmount() {
       clearInterval(this.interval);
    }
    
   

    render() {
        return (
            <>
                <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.state.imgCoord} 0` }} />
                <div>
                <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
                <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
                <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
                </div>
                <div>{this.state.result}</div>
                <div>현재 {this.state.score}점</div>
            </>
        )
    
    }


}

export default RSP;
=======

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function (v) {
    return v[1] === imgCoord;
  })[0];
};
const RSP = () => {
  const [result, setResult] = useState("");
  const [imgCoord, setImgCoord] = useState(rspCoords.바위);
  const [score, setScore] = useState(0);
  const interval = useRef();

  useEffect(() => {
    // componentDidMount, componentDidUpdate 역할(1대1 대응은 아님)
    interval.current = setInterval(changeHand, 100);
    return () => {
      // componentWillUnmount 역할
      clearInterval(interval.current);
    };
  }, [imgCoord]);

  const changeHand = () => {
    if (imgCoord === rspCoords.바위) {
      setImgCoord({ imgCoord: rspCoords.가위 });
    } else if (imgCoord === rspCoords.가위) {
      setImgCoord({ imgCoord: rspCoords.보 });
    } else if (imgCoord === rspCoords.보) {
      setImgCoord({ imgCoord: rspCoords.바위 });
    }
  };

  const onClickBtn = (choice) => () => {
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }

    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      setResult({ result: "비겼습니다" });
    } else if ([-1, 2].includes(diff)) {
      setResult({ result: "이겼습니다!" });
      setScore((prevScore) => prevScore + 1);
    } else {
      setResult({ result: "졌습니다!" });
      setScore((prevState) => prevState.score - 1);
    }
    setTimeout(() => {
      interval.current = setInterval(changeHand, 100);
    }, 1000);
  };
  return (
    <>
      <div
        id="computer"
        style={{
          background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
        }}
      />
      <div>
        <button id="rock" className="btn" onClick={onClickBtn("바위")}>
          바위
        </button>
        <button id="scissor" className="btn" onClick={onClickBtn("가위")}>
          가위
        </button>
        <button id="paper" className="btn" onClick={onClickBtn("보")}>
          보
        </button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );
};

export default RSP;
>>>>>>> 390d6b6784f8d8d7de5b10b125bf439210a8dbf6
