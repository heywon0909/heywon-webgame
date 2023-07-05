import * as React from "react";
import { Component } from "react";

interface State {
  first: number,
  second: number,
  value: string,
  result: string
}
class GuGuDan extends Component<{},State> {
  state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: '',
    result: '',
  };
  input:HTMLInputElement | null = null;
  
  onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (parseInt(this.state.value) === this.state.first * this.state.second) {
      this.setState((prevState) => {
        return {
          result: '정답: ' + prevState.value,
          first: Math.ceil(Math.random() * 9),
          second: Math.ceil(Math.random() * 9),
          value: '',
        }
      });
      if (this.input) {
        this.input.focus();
      }
    } else {
      this.setState({
        result: '땡',
        value: ''
      });
      if (this.input) {
        this.input.focus();
      }
    }
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({value: e.target.value})
  }
  
  
  onRefInput = (c:HTMLInputElement) => { this.input = c };
  

  render() {
    return(
    <>
    <div>{this.state.first} 곱하기 {this.state.second}</div>
    <form onSubmit={this.onSubmitForm}>
      <input ref={this.onRefInput} type="number" value={this.state.value} onChange={this.onChange}
      />
    </form>
    {this.state.result}
  </>)
  }

  
}
export default GuGuDan;
