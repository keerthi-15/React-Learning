import React from "react";
import './ClassWithoutJSX.css';

/*
    A summary for React.createElement, it is used to render output without using JSX
    React.createElement('arg1','arg2','arg3')
        arg1 => Tag
        arg2 => optional props  ie attributes such id, onClick etc given as object key value pair (EG: {id:'vl'})
        arg3 => children { children for tag which is called in arg1 }
*/

/* Passing Props as null */

// let WithoutJSX = () =>{
//     return React.createElement('div', null, 'This is done by without JSX')
// }

/* Passing values to Props  */

// let WithoutJSX = () =>{
//     return React.createElement('div',{ className:'withoutJSX' },'Created without using JSX')
// }

/*
======================================================================
What I learned here is ... while passing props the className
 should be given as 
        className:'withoutJSX'  (correct one)
            and not as  
        className='withoutJSX'  (wrong one)
======================================================================
*/

/* When u want call 2 tags in React.createElement */

let WithoutJSX = () =>{
    return(
        React.createElement("div", null,React.createElement("h1", { className:"withoutJSX" }, "Tag inside a tag!"))
    );
}


export default WithoutJSX;

/*
======================================================================
What I learned here is ... Functional component 
        *** If u use function keyword then u shld do arrow func
                        only arrow func wrks on let, const, var *** 
=======================================================================

=======================================================================
**** If u use class in React.createElement it wil show error in console because here we should use className because class is a keyword used to create class compoenent

=======================================================================
*/
