import React, { Component } from "react";
class ResponseCheck extends Component {
  state = {
    state: "waiting",
    message: "클릭해서 시작하세요.",
    result: [],
  };
  onClickScreen = () => {};
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
