import React from 'react'
import useCounter from '../customHooks/useCounter'

function CounterCustomHooksOne() {
    const [count, increment, decrement, reset] = useCounter(1,1)  //To access the values, we  use array destructuring
  return (
    <div>
        <h2>Count - {count} </h2>
        <div>
            <button onClick={increment} >Increment</button>

            <button onClick={decrement}>Decrement</button>

            <button onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default CounterCustomHooksOne