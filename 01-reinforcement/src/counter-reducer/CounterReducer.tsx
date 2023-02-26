import React, { useReducer } from 'react'

import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/counterReducer';
import * as CounterActions from './actions/actions';

const INITIAL_STATE: CounterState = {
  counter: 10,
  previous: 15,
  changes: 9
}

export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleIncreaseBy = (value: number = 1) => {
    dispatch( CounterActions.doIncreaseBy(value) );
  }

  const handleReset= () => {
    dispatch( CounterActions.doReset() );
  }

  return (
    <>
      <h2>Counter Reducer: { counterState.counter }</h2>
      <pre>
        { 
          JSON.stringify(counterReducer, null, 2) 
        }
      </pre>
      <button
        className='btn mr-1'
        onClick={ () => handleIncreaseBy() }
      >
        +1
      </button>
      <button
        className='btn mr-1'
        onClick={ () => handleIncreaseBy(5) }
      >
        +5
      </button>
      <button
        className='btn mr-1'
        onClick={ () => handleIncreaseBy(10) }
      >
        +10
      </button>
      <button
        className='btn'
        onClick={ handleReset }
      >
        Reset
      </button>
    </>
  )
}
