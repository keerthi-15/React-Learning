import React, { useState } from 'react'
import useDocumentTitle from '../customHooks/useDocumentTitle'

/* As we're using the same useEffect func it is better to create a custom hook */

function DocTitleTwo() {

    const [count, setCount] = useState(0)

    useDocumentTitle(count)

    return (
        <div>
            Count - {count}
            <br />
            <button onClick={() => setCount(count - 1)} >Decrease</button>
        </div>
    )
}

export default DocTitleTwo