import React, { useEffect, useState } from 'react'

function CleanUpHook() {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    const logMouseHandler =(e)=>{
        console.log('Mouse Event')   //This line shows the render which is made unnecessarily
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(()=>{
        console.log('Mounting')
        window.addEventListener('mousemove',logMouseHandler)
        return()=>{
            console.log('Unmount')
            window.removeEventListener('mousemove',logMouseHandler)
        }
    },[])
  return (
    <div>
        X : {x} &nbsp; Y : {y}
    </div>
  )
}

export default CleanUpHook