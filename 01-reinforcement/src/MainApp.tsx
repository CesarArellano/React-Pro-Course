import { Counter } from './bases/Counter'
import { CounterBy } from './bases/CounterBy';

export const MainApp = () => {
  return (
    <>
      <h1> Main App </h1>
      <hr />
      <Counter initialValue={ 15 } />
      <CounterBy initialValue={ 15 } />
    </>
  )
}
