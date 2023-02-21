import React, { Component } from 'react'

/* Destructuring props in class component props are declared to variables and it is done inside render method */

// class DestructuringPropsStateInClassComponent extends Component {
//     render() {
//         const {name, age, children} = this.props
//         return (
//             <div>
//                 <h3>Destructuring props in class component method 1</h3>
//                 <h4>Hi, Iam {name} and my age is {age}</h4>
//                 <span>{children}</span>
//             </div>
//         )
//     }
// }

/* Destructuring state in class compoenent */

class DestructuringPropsStateInClassComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Jasper",
             age:"5"
        }
    }
    
    render() {
        const {name, age} = this.state
        const {children} = this.props
        return (
            <div>
               <span> Destructuring State in class component! </span>
               <p>Hi, Iam {name} and my age is {age}</p>
               <p>{children}</p>
            </div>
        )
    }
}

export default DestructuringPropsStateInClassComponent

/*

==========================================================================

    unpack values from arrays and properties from object => destructuring

==========================================================================

*/
