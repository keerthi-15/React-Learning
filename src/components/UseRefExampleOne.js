import React, { useEffect, useRef } from 'react'
/* Now we're plannning to do autofocus, athu vanthu onload page la dhan nadakum so useEffect
   On load la DOM nodes ah access panra so useRef
*/
function UseRefExampleOne() {

    const focus = useRef(null)  //see useRef syntax no array

    useEffect(() => {
        focus.current.focus() // calling focus method on input element current -> will set the current property to the DOM node
    },[])

    return (
        <div>
            Autofocus: <input ref={focus} type='text' /> {/* To attach ref */}
        </div>
    )
}

export default UseRefExampleOne