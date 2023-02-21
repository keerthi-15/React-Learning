import React, { useState } from 'react'
import Modal from './Modal'

function Butons() {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div>
                <button onClick={()=>setOpen(true)}>Open</button>
            </div>
            <br />
            <div>
                <button onClick={()=>setOpen(false)}>Focus close</button>
            </div>
            <br />
            <div>
                <button onClick={()=>setOpen(false)}>Focus Confirm</button>
            </div>
            <br />
            <div>
                <button onClick={()=>setOpen(false)}>Focus Deny</button>
            </div>
            <br />
            <div>
                <Modal isOpen={open} />
            </div>
        </div>
    )
}

export default Butons