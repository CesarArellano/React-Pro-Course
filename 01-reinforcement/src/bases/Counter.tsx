import React, { useState } from 'react'

interface Props {
  initialValue: number;
}

export const Counter = ({ initialValue }: Props) => {
  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    setCounter( counter + 1 );
  }

  return (
    <>
      <h2>Counter: { counter  }</h2>
      <button
        className='btn'
        onClick={ handleClick }
      >
        +1
      </button>
    </>
  )
}
