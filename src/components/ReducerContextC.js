import React, { useContext } from 'react'
import { CountContext } from '../App'

function ReducerContextC() {
    const countB = useContext(CountContext)
    return (
        <div>
            ReducerContextC -{countB.contextCount.firstCounter}
            <button onClick={()=> countB.contextDispatch({type:'increment', value: 2})} >Increment C</button>
            <button  onClick={()=> countB.contextDispatch({type:'decrement', value: 2})}>Decrement C</button>
            <button  onClick={()=> countB.contextDispatch({type:'reset'})}>Reset C</button>
        </div>
    )
}

export default ReducerContextC