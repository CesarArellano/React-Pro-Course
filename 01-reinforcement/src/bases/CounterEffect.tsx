import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCounter( (prev) => Math.min( prev +1 , 10) );
  }

  useEffect(() => {
    if( counter < 10) return;

    console.log('Reached maximum value');
    
    const tl = gsap.timeline();

    tl.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(counterElement.current, { y: 0, duration: 0.2, ease: 'bounce.out' })

  }, [counter])
  

  return (
    <>
      <h2>Counter Effect:</h2>
      <h2 ref={ counterElement }>{ counter }</h2>
      <button
        className='btn'
        onClick={ handleClick }
      >
        +1
      </button>
    </>
  )
}
