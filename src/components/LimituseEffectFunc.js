import React, { useEffect, useState } from 'react'

function LimituseEffectFunc() {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    const logMouseHandler = (e) => {
        setX(e.clientX);
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('Rendering');
        window.addEventListener('mousemove',logMouseHandler)
    },[])
  return (
    <div>
        <span>
            x : {x} &nbsp; y : {y}
        </span>
    </div>
  )
}

export default LimituseEffectFunc