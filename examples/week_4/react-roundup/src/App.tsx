import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterClassComponent from './ClassComponents/CounterClassComponent';
import LifecycleExample from './ClassComponents/LifecycleExample';
import Counter from './Testing/Counter/Counter';
import Greeting from './Testing/Greeting/Greeting';
import Async from './Testing/Async/Async';

function App() {
  return (
    <div className="App">
      {/* <CounterClassComponent/> */}
      {/* <LifecycleExample/> */}
      <Counter/>
      <Greeting/>
      <Async/>
    </div>
  );
}

export default App;
