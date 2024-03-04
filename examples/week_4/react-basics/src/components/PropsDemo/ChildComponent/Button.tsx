import React from 'react'

function Button(props: any) {
  return (
    <button style={{
        backgroundColor: props.bgColor,
        color: "white",
        border: "none",
        borderRadius: props.isRound == "true" ? "6px" : "0px",
        padding: "8px",
        fontSize: "20px"
    }}>Click Me</button>
  )
}

export default Button
