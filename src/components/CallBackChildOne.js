import React from 'react'

function CallBackChildOne(props) {
    console.log(`Render ${props.text}`)
    return (
        <div>
            {props.text} - {props.count}
        </div>
    )
}

export default React.memo(CallBackChildOne)