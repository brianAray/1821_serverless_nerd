import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../ReduxBasicDemo/slices/counterSlice";

/*
    What is a Hook?
        - Extra methods added to functional components to provide the same functionality of class components
        - Also has other functionalities that can let you do interesting things
    
    Hooks we will be using:
        - useState()
            - Allows us to create state variables
    
    What is state?
        - Variables taht are directly tied to this component
*/

function HooksDemo() {
  //   let isVisible = false;

  //   let [visibility, setVisibility] = useState(false);
  //   let [counter, setCounter] = useState(0);

  let counter = useSelector((state: any) => state.counter.value);

  let dispatcher = useDispatch();

  let [state, setState] = useState({
    visibility: false,
    // counter: 0,
  });

//   useEffect(() => {
//     console.log("useEffect triggered");
//   }, [state.counter])

  function toggleVisibility() {
    // console.log(isVisible);
    // isVisible = !isVisible;
    // setVisibility(!visibility);

    setState({ ...state, visibility: !state.visibility });
  }

  function incrementCounter() {
    // setCounter((counter += 1));
    // let newCount = (state.counter += 1);
    // setState({ ...state, counter: ++state.counter });
    dispatcher(counterActions.increment())
  }

  function decrementCounter() {
    // let newCount = (state.counter -= 1);
    // setState({ ...state, counter: --state.counter });
    dispatcher(counterActions.decrement()); 
  }

  return (
    <>
      <button onClick={toggleVisibility}>Toggle</button>

      {state.visibility ? <h1>Am I visible?</h1> : <></>}

      <h2>{counter}</h2>

      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </>
  );
}

export default HooksDemo;
