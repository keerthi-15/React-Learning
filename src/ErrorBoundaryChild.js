import React from 'react'

function ErrorBoundaryChild(props) {
    if(props.heroName==="Keerthi"){
        throw new Error('Not expected')
    }
    return (
        <div>
           {props.heroName} 
        </div>
    )
}

export default ErrorBoundaryChild
