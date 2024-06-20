import React, { useState } from 'react'
import MyView from './MyView';

/**
 * Controller
 * Responsible for user input and managing state
 * 
 * View
 * Responsible for representing data 
 * 
 * Advantages of the Controller-View Pattern
 * 
 * - Separation of concerns
 *      - Enforces a clear separation of concerns between view and controller (user interface vs application logic)
 * - Testability
 *      - Allows for independent testing
 *      - The controller can be unit-tested without the need for UI interaction
 *      - View can be unit tested for rendering correctly
 * - Modularity
 *      - Controller-View pattern promotes modularity and code reuse
 *      - You can change the underlying UI without the underlying logic being interrupted
 * - Collaboration
 *      - Multiple developers can work on the different parts of the application, with clear boundaries between controller and view components
 */

function MyController() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
  return (
    <MyView count={count} onIncrement={handleIncrement}/>
  )
}

export default MyController