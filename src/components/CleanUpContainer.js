import React, { useState } from 'react'
import CleanUpHook from './CleanUpHook'

function CleanUpContainer() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle display</button>
        {display && <CleanUpHook />}
    </div>
  )
}

export default CleanUpContainer