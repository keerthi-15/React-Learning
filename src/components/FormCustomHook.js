/* Normal way to implement */


// import React, { useState } from 'react'

// function FormCustomHook() {
//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const submit = (e) =>{
//         e.preventDefault()  //prevents the page from page load
//         alert(`Hy ${firstName} ${lastName}`)
//         setFirstName('')
//         setLastName('')
//     }
//     return (
//         <div>
//             <form onSubmit={submit}>
//                 <label>First Name</label>
//                 <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//                 <label>Last Name</label>
//                 <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
//                 <button>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default FormCustomHook

/* using custom Hooks */

import React from 'react'
import useInput from '../customHooks/useInput'

function FormCustomHook() {
/*  detstructiong useInput*/

    const [firstName, setFirstName, resetFirstName] = useInput('')
    const [lastName, setLastName, resetLastName] = useInput('')
    const submit = (e) =>{
        e.preventDefault()  //prevents the page from page load
        alert(`Hy ${firstName} ${lastName}`)
        resetFirstName('')
        resetLastName('')
    }
    return (
        <div>
            <form onSubmit={submit}>
                <label>First Name</label>
                <input type='text' {...setFirstName} />
                <label>Last Name</label>
                <input type='text' {...setLastName} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default FormCustomHook