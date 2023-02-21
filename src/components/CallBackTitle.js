import React from 'react'

function CallBackTitle(props) {
    console.log('title')
    return (
        <div>
            {props.title}
        </div>
    )
}

export default React.memo(CallBackTitle)