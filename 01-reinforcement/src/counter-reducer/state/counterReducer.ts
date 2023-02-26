import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const counterReducer = (state: CounterState, action: CounterAction ): CounterState => {
  
  const { counter, changes} = state;

  switch (action.type) {
    case 'increaseBy':
      return {
        changes: changes + 1,
        counter: counter + action.payload,
        previous: counter,
      };
    case 'reset':
      return {
        changes: 0,
        counter: 0,
        previous: 0,
      }
    default:
      return state;
  }
}