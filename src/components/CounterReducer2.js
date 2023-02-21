import React, { useReducer } from 'react'

function CounterReducer2() {
    const initialCount = {
        firstCount: 0,
        secondCount: 10
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { ...state, firstCount: state.firstCount + action.value };
            case 'decrement':
                return { ...state, firstCount: state.firstCount - action.value };
            case 'increment2':
                return { ...state, secondCount: state.secondCount + action.value };
            case 'decrement2':
                return { ...state, secondCount: state.secondCount - action.value };
            case 'reset':
                return initialCount;
            default:
                return state
        }
    }
    const [count, dispatch] = useReducer(reducer, initialCount)
    return (
        <div>
            Count - {count.firstCount} <br />
            count - {count.secondCount} <br />
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button> <br />
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button><br />
            <button onClick={() => dispatch({ type: 'increment', value: 2 })}>Increment2</button> <br />
            <button onClick={() => dispatch({ type: 'decrement', value: 2 })}>Decrement2</button><br />
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 5 })}>Increment</button> <br />
                <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>Decrement</button> <br />
            </div>
        </div>
    )
}

export default CounterReducer2