import React, { Component } from "react";

type MyProps = {};
type MyState = { count: number };
export default class CounterClassComponent extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = { count: 0 };
  }



  render() {
    return (
      <div>
        <p>Count: {this.state.count} </p>
      </div>
    );
  }
}
