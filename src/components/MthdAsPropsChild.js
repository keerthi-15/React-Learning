import React from 'react'

function MthdAsPropsChild(props) {

    return (
        <div>
            <button onClick={()=>props.mthdAsProps('Child')}>Check me</button>
        </div>
    )
}

export default MthdAsPropsChild
