import React from 'react'

function MemoComp(props) {
    console.log('Memo Component')
    return (
        <div>
            Memo component {props.name} 
        </div>
    )
}

export default React.memo(MemoComp) 

/* Now in console, only parent component renders */