import { Counter } from './bases/Counter'

export const MainApp = () => {
  return (
    <>
      <h1> Main App </h1>
      <hr />
      <Counter initialValue={ 15 } />
    </>
  )
}
