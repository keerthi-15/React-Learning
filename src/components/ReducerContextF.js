import React from 'react'
import { CountContext } from '../App'

function ReducerContextF() {
    return (
        <div>
            <CountContext.Consumer>
                {
                    count => {
                        return (
                            <div>
                                ReducerContextF - {count.contextCount.firstCounter}
                                <button onClick={()=>count.contextDispatch({type:'increment',value:3})}>Increment F</button>
                                <button onClick={()=>count.contextDispatch({type:'decrement',value:3})}>Decrement F</button>
                                <button onClick={()=>count.contextDispatch({type:'reset'})}>Reset F</button>
                            </div>
                        )
                    }
                }
            </CountContext.Consumer>
        </div>
    )
}

export default ReducerContextF