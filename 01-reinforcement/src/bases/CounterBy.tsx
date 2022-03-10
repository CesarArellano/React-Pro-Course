import React, { useState } from 'react'

interface Props {
  initialValue: number;
}

export const CounterBy = ({ initialValue }: Props) => {
  const [state, setState] = useState({
    counter: initialValue,
    clicks: 0,
  });

  const { counter, clicks } = state;
  
  const handleClick = (increment:number = 1) => {
    setState({
      clicks: clicks + 1,
      counter: counter + increment,
    });
  }

  return (
    <>
      <h2>CounterBy: { counter  }</h2>
      <h2>clicks: { clicks  }</h2>
      <button
        className='btn mr-1'
        onClick={ () => handleClick(1) }
      >
        +1
      </button>
      <button
        className='btn'
        onClick={ () => handleClick(5) }
      >
        +5
      </button>
    </>
  )
}
