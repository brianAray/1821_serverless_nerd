import React from 'react'
import Button from '../ChildComponent/Button'

function ParentComponent() {
  return (
    <>
        <Button bgColor="red" isRound="false"/>
        <Button bgColor="lightblue" isRound="true"/>
    </>
  )
}

export default ParentComponent