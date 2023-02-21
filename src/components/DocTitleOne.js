import React, { useState } from 'react'
import useDocumentTitle from '../customHooks/useDocumentTitle'

/* Creating a file which updates the document title based on the count value, the count value get increased by one onClick of the btn */

function DocTitleOne() {

    const [count,setCount] = useState(0)

    useDocumentTitle(count)

  return (
    <div>
        Count - {count}
        <br/>
        <button onClick={()=>setCount(count+1)} >Increase</button>
    </div>
  )
}

export default DocTitleOne