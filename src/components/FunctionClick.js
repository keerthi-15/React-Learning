/* rfce => functional component, rce => Class component */

import React from 'react'
import styles from './FunctionClick.css'

/* Using Function keyword */

// function FunctionClick() {
//     function change(){
//         console.log("Button Clicked!");
//     }
//     return (
//         <div>
//            <button className="btn" onClick={change} >Don't get distracted!</button> 
//         </div>
//     )
// }

/* Arrow Method */

// const FunctionClick = ()=> {
//     let change = () =>{
//         console.log("Button clicked!")
//     }
//     return (
//         <div>
//             <button onClick={change}>Don't get distracted</button>
//         </div>
//     )
// }

/* Arrow method within Onclick */

function FunctionClick() {
    const change=()=> {
        console.log("Button Clicked!");
    }
    return (
        <div>
           <button onClick={change}>Don't get Distracted</button> 
        </div>
    )
}

export default FunctionClick

/*  =>  If u write text-align to btn tag it won't take as it is a button but
            to make that btn center u can write text-align: center to div tag 

* Event handler should be function change and not function call change()
    =>  change() it will be rendered on page load it self and not click of tht btn
    =>  change it will be rendered after clicking on it
    =>  Don't get confused with onClick={()=>change()} => and func will written as change(){} here change it will be rendered after clicking on it
        
   
    
    

    */
