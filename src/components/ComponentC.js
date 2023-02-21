// import React, { Component } from 'react'
// import { UserConsumer } from '../ContextUser'

// class ComponentC extends Component {
//   render() {
//     return (
//       <UserConsumer>
//         {
//             userValue =>{
//                return <span> Component C {userValue} </span> // Make sure u return :)
//             }
//         }
//       </UserConsumer>
//     )
//   }
// }

// export default ComponentC

import React, { Component } from 'react'
import { ContextUser, UserConsumer } from '../ContextUser'

class ComponentC extends Component {
  render() {
    return (
      <ContextUser.Consumer>
        {
            userValue =>{
               return <span> Component C {userValue} </span> // Make sure u return :)
            }
        }
      </ContextUser.Consumer>
    )
  }
}

export default ComponentC