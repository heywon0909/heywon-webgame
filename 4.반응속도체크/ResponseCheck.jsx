import React, { Component } from "react";
class ResponseCheck extends Component {
  state = {
    state: "waiting",
    message: "클릭해서 시작하세요.",
    result: [],
  };
  timeout;
  onClickScreen = () => {
    const { state, message, result } = this.state;
    if (state === "waiting") {
      this.setState({
        state: "ready",
        message: "초록색이 되면 클릭하세요",
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: "now",
          message: "지금 클릭",
        });
      }, Math.floor(Math.random() * 1000) + 2000); // 2초 ~ 3초 랜덤
    } else if (state === "ready") {
      clearTimeout(this.timeout);
      this.setState({
        state: "waiting",
        message: "너무 성급하시군요! 초록색이 된 후에 클릭하세요!",
      });

      // 성급하게 클릭
    } else if (state === "now") {
      // 반응속도체크
      this.setState({
        state: "waiting",
        message: "클릭해서 시작하세요!",
        result: [],
      });
    }
  };
  renderAverage = () => {
    const { result } = this.state;
    return result.length === 0
      ? null
      : result.reduce((a, c) => a + c) / result.length;
  };
  render() {
    return (
      <>
        <div
          id="screen"
          className={this.state.state}
          onClick={this.onClickScreen}
        >
          {this.state.message}
        </div>
        <div>
          평균 시간:
          {this.renderAverage()}
          ms
          {/* &&
           {this.state.result.length !== 0
            &&
           (this.state.result.reduce((a, c) => a + c) /
              this.state.result.length)} */}
        </div>
      </>
    );
  }
}
export default ResponseCheck;
