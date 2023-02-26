import { useCounter } from '../hook/useCounter';

export const CounterHook = () => {

  const { counter, elementToAnimateRef, handleClick } = useCounter({
    maxCount: 10
  });

  return (
    <>
      <h2>Counter Hook:</h2>
      <h2 ref={ elementToAnimateRef }>{ counter }</h2>
      <button
        className='btn'
        onClick={ handleClick }
      >
        +1
      </button>
    </>
  )
}
