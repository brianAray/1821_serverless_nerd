import React from 'react'

type MyProps = {count: number, onIncrement: any}
function MyView({count, onIncrement}: MyProps) {
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={onIncrement}>Increment</button>
    </div>
  )
}

export default MyView