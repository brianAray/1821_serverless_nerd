import React from 'react';
import './ListElement.css';

function ListElement(props: any) {
  return (
    <div className='name-div' key={props.index}>
        <div className='firstName-div'>{props.obj.firstName}</div>
        <div className='lastName-div'>{props.obj.lastName}</div>
    </div>
  )
}

export default ListElement