import React, { useEffect, useRef, useState } from 'react'

function UseRefExampleTwo() {
   const [count,setCount] =  useState(0)
   /* My undestanding, ipo onClick function la useEffectr ah useEffect ah nanupa mudiyathu aprm const interval use pana mudiyathu use\effect vittu
      Ipo dhan ref use agum ith situation la..... athhan ref 
       => Ref can reference to the DOM node using the ref attribute it can also be used to store any mutable value
       => Advantage ---> value will persists through the re-render while not causing any additional render when its value changes
   */
  const interval = useRef()
   useEffect(()=>{
     interval.current =                            //oru variable la arrow func define panra d , refer incorrectdependency.js file once
        setInterval(()=>{
            setCount(prevCount => prevCount+1)
        },1000)
        return () =>{
            clearInterval(interval.current)
        };
   },[])
  return (
    <div>
         count - {count} 
         <br />
         <button onClick={()=>clearInterval(interval.current)} >Stop Timer</button>
    </div>
  )
}

export default UseRefExampleTwo