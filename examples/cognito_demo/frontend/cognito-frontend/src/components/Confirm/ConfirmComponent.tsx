import React from 'react'

function ConfirmComponent(props: any) {
  return (
    <>
        <h2>Confirm Registration</h2>
        <input type='text' placeholder='Confirmation Code' onChange={(e) => props.setConfirmationCode(e.target.value)}/>
        <button onClick={props.confirmUser}>Confirm</button>
    </>
  )
}

export default ConfirmComponent