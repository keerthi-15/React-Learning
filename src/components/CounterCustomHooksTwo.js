import React from 'react'
import useCounter from '../customHooks/useCounter'

function CounterCustomHooksTwo() {
    const [count, increment, decrement, reset] = useCounter(10,10)  //To access the values, we  use array destructuring
  return (
    <div>
        <h2> Count - {count}  </h2>
        <div>
            <button onClick={increment} >Increment</button>
            <button onClick={decrement}>Deccrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default CounterCustomHooksTwo