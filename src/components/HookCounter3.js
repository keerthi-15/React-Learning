import React, { useState } from 'react'

function HookCounter3() {
    const [names, setNames] = useState({ firstName: '', lastName: '' });
    const updateFirstName = (e) => {
        setNames({
            ...names, firstName: e.target.value
        })
    };
    const updateLastName = (e) => {
        setNames({
            ...names,lastName: e.target.value
        })
    };
    return (
        <div>
            <input type='text' value={names.firstName} onChange={e => updateFirstName(e)} />
            <input type='text' value={names.lastName} onChange={e => updateLastName(e)} />
            <h4>Your First Name: {names.firstName} </h4>
            <h4>Your Last Name: {names.lastName} </h4>
            {/* THIS IS AN IMPORTANT LINE TO KNOW ABOUT WHAT IS HAPPENING!!! */}
            <h6>  {JSON.stringify(names)}  </h6>
        </div>
    )
}

export default HookCounter3

/*
How it works,
==> hey copy every property in the name object and then just override 1st name field in diff value (Line 17,18)
*/