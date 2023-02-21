import React from 'react'

/* Normal Function
function ForwardRefChild() {
    return (
        <>
            <label>User Name: </label>
            <input type="text" />
        </>
    )
}
*/
/* forwarding ref we should use an arrow function and React.forwardRef() method 
    1. After  ForwardRefChild= type React.forwardRef()
    2. then copy the arrow function()=> and put in the parenthesis
    3. this will take ref as its parameter

*/
const ForwardRefChild=React.forwardRef((props,ref)=>{
    return (
        <>
            
            <input type="text" ref={ref} />
        </>
    )
})
export default ForwardRefChild
