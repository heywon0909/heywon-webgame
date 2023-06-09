import * as React from "react";
import { Component } from "react";
class GuGuDan extends Component {
  state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: "",
    result: "",
  };
  onRefInput = (c) => {
    this.input = c;
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.first} 곱하기 {this.state.second}는?
        </div>
        <form onSubmit={this.onSubmit}></form>
      </React.Fragment>
    );
  }
}
export default GuGuDan;
