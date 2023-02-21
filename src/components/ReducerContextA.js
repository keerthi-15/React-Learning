import React, { useContext } from 'react'
import { CountContext } from '../App'

function ReducerContextA() {
    const countA = useContext(CountContext)
  return (
    <div>
        ReducerContextA - {countA.contextCount.firstCounter}
        <button onClick={()=>countA.contextDispatch({type:'increment',value:1}) }>Increment A</button>
        <button onClick={()=>countA.contextDispatch({type:'decrement',value:1}) }>Decrement A</button>
        <button onClick={()=>countA.contextDispatch({type:'reset'}) }>Reset A</button>
    </div>
  )
}

export default ReducerContextA