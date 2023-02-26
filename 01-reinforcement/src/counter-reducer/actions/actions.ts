export type CounterAction = 
  | { type: 'increaseBy', payload: number }
  | { type: 'reset' }


export const doIncreaseBy = (payload: number):CounterAction => ({
  type: 'increaseBy',
  payload
})

export const doReset = ():CounterAction => ({
  type: 'reset'
})