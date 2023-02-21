import React from 'react'

function FragmentArray() {
    let array=['1','2','3','4','5','6','7']
    return (
        <div>
            {array.map(item=><React.Fragment key={item}>{item}</React.Fragment>)}
        </div>
    )
}

export default FragmentArray
