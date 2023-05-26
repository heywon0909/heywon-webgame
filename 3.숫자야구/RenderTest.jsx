import React, { Component } from "react";
// Component를 PureComponent로 바꾸면 shouldComponentUpdate 안써도 됨
// 단, state가 복잡하면 적용안됨...
class Test extends Component {
  state = {
    counter: 0,
  };
  onClick = () => {
    this.setState({});
  };
  // setState 를 호출하기만 해도 렌더링이 다시 일어난다...
  // 그래서 직접 확인해서 렌더링 시켜줘야함
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.state.counter !== nextState.counter) {
      return true;
    }
    return false;
  }

  render() {
    console.log("렌더링", this.state);
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}
export default Test;
