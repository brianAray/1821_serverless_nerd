import React from 'react'

/**
 * Events use different names than in HTML and JS
 * onClick = {} using the {} to include the name of the function to be called
 * 
 * Do not use parenthesis in this to call the function, just the name of the function
 * 
 * This will be called each time the event is triggered
 * 
 */

function EventsDemo() {

    function clickEventTriggered(){
        console.log("click button triggered");
    }

    function hoverEventTriggered(){
        console.log("hover event triggered");
    }

    // text input
    // we use onChange to register an event when something changes

    function inputChanged(event: any){
        // console.log("input changed");
        console.log(event.target.value);
    }

  return (
    <>
        <button onClick={clickEventTriggered}>Click Event</button>
        <button onMouseOver={hoverEventTriggered}>Hover Event</button>

        <input type="text" placeholder='Username' onChange={inputChanged}/>
    </>
  )
}

export default EventsDemo