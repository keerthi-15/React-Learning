import React, { useReducer } from 'react'

function CounterReducer3() {
    const initialState = 0;
    const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            default:
                return initialState;
        }
    }
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
    return (
        <div>
            Count - {count} &nbsp; CountTwo - {countTwo}
            <button onClick={() =>dispatch('increment')}>Increment</button>
            <button onClick={() =>dispatch('decrement')}>Decrement</button>
            <button onClick={() =>dispatchTwo('increment')}>Increment2</button>
            <button onClick={() =>dispatchTwo('decrement')}>Decrement2</button>
        </div>
    )
}

export default CounterReducer3