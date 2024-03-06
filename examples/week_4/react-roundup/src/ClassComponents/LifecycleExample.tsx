import React, { Component } from "react";

type MyProps = {};
type MyState = { count: number };
export default class LifecycleExample extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor");
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount(): void {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log("shouldComponentUpdate");
    if (this.state.count > 2){
        return true
    }
    return false;
  }

  getSnapshotBeforeUpdate(
    prevProps: Readonly<MyProps>,
    prevState: Readonly<MyState>
  ) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(
    prevProps: Readonly<MyProps>,
    prevState: Readonly<MyState>,
    snapshot?: any
  ): void {
    console.log("componentDidUpdate");
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Lifecycle Example</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
