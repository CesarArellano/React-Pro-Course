import React, { useState } from 'react'

interface Props {
  initialValue: number;
}

interface CounterState {
  clicks: number;
  counter: number;
}

export const CounterBy = ({ initialValue }: Props) => {
  const [{ clicks, counter }, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });
  
  const handleClick = (increment:number = 1) => {
    setCounterState(({ clicks, counter }) => ({
      clicks: clicks + 1,
      counter: counter + increment,
    }));
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
