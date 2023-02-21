import React, { useReducer } from 'react'


function CounterReducer() {
    const initialCount = 0;
    const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'reset':
                return initialCount;
            default:
                return state;
        }
    }
    const [count, dispatch] = useReducer(reducer, initialCount)
    return (
        <div>
            Count - {count}
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterReducer