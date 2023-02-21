import React from 'react';

/* method 1 */
// let DestructingPropsInFunc = (props) =>{
//     return (
//         <div>
//             <h1>Destructuring Props in functional component </h1>
//             <h3>
//                 {props.name} a.k.a {' '}
//                 {props.fullName}
//             </h3>
//             <h4>{props.children}</h4>
//         </div>
//     )
// }

/* method 2 
    * Arguments should be passed within {} 
*/
//  let DestructingPropsInFunc = ({name, fullName, children}) =>{
//      return(
//          <div>
//              <h4>This is an example for destructuring props!</h4>
//              <h5>
//                  {name} a.k.a {' '}
//                  {fullName}
//              </h5>
//              <h6>
//                  {children}
//              </h6>
//          </div>
//      )
//  }

/* method 3
   Assigining props values to the variable
    => variable should be assigned before return method, props should be passed as argument
*/

let DestructingPropsInFunc = (props) => {
    const { name, fullName, children } = props
    return (
        <div>
            <h3>~ This Method 3 for destructuring props ~</h3>
            <h4>
                {name} a.k.a {" "} {fullName}
            </h4>
            <h6>
                {children}
            </h6>
        </div>
    )
}

export default DestructingPropsInFunc;

/*
=====================================================================
Basically Destructuring props done within {}
=====================================================================
*/
