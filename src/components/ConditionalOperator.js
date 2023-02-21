/* Method 1: if/else */

// import React, { Component } from 'react'

// class ConditionalOperator extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//              isLoggedIn: true
//         }
//     }

//     render() {
//         if(this.state.isLoggedIn){
//             return <div>Welcome Rajam</div> 
//         }
//         else{
//             return <div>Welcome Guest</div> 
//         }

//     }
// }

// export default ConditionalOperator

/* Method 2: Element Variables */

//  import React, { Component } from 'react'

//  class ConditionalOperator extends Component {
//      constructor(props) {
//          super(props)

//          this.state = {
//               isLoggedIn:true
//          }
//      }

//      render() {
//          let message
//          if(this.state.isLoggedIn){
//              message = <span>Welcome Rajam</span>
//          }
//          else{
//              message = <span>Welcome Guest</span>
//          }
//          return (
//              <div>
//                  {message}
//              </div>
//          )
//      }
//  }

//  export default ConditionalOperator

/* Method 3: Ternary Conditional Operator */

// import React, { Component } from 'react'

// class ConditionalOperator extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             isLoggedIn: true
//         }
//     }

//     render() {
        
//     /* One way of writing */
//         return (
//             this.state.isLoggedIn ? <span>Welcome Rajam</span> : <span>Welcome Guest</span>
//         )
//     /* 2nd way */
//         // return this.state.isLoggedIn ? (           
//         //     <span>Welcome Rajam</span>
//         // ) : (
//         //     <span>Welcome Guest</span>
//         // )
//     }
// }

// export default ConditionalOperator

/* Method 4 : Short Circuit Operator */
import React, { Component } from 'react'

class ConditionalOperator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        return (
            this.state.isLoggedIn && <span>Welcome Rajam</span>
        )
    }
}

export default ConditionalOperator


