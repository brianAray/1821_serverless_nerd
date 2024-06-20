import React, { useState } from 'react'

function Greeting() {
    const [changedText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(true)
    }

  return (
    <div>
        <h2>Hello World</h2>

        {!changedText ? <p>It's nice to meet you</p>: <p>I have been changed</p>}
        <button onClick={changeTextHandler}>Change Text</button>
    </div>
  )
}

export default Greeting