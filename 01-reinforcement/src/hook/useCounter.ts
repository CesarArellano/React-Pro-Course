import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

interface HookProps {
  maxCount: number,
}

export const useCounter = ({ maxCount = 1 }: HookProps) => {
  const [counter, setCounter] = useState(5);
  const elementToAnimateRef = useRef<any>(null);
  const tl = useRef( gsap.timeline() );

  const handleClick = () => {
    setCounter( (prev) => Math.min( prev +1 , maxCount) );
  }

  useLayoutEffect(() => {

    if( !elementToAnimateRef.current ) return;

    tl.current.to(elementToAnimateRef.current, { y: -10, duration: 0.2, ease: 'ease.out' })
              .to(elementToAnimateRef.current, { y: 0, duration: 0.2, ease: 'bounce.out' })
              .pause()
  }, []);

  useEffect(() => {
    tl.current.play(0)
  
  }, [counter])
  

  return {
    counter,
    handleClick,
    elementToAnimateRef
  }
}
