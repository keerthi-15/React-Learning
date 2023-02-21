// import React, { Component } from 'react'
// import HCHoverCounter from './HCHoverCounter'
// import HCClickCounter from './HCClickCounter'

// class HCClickHoverParent extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count:0
//         }
//     }
//     incrementHandler=()=>{
//         this.setState((prevState)=>{
//             return {
//                 count: prevState.count + 1
//             }
//         })
//     }
//     render() {
//         let {count} = this.state
//         return (
//             <div>
//                <HCHoverCounter count={count} incrementHandler={this.incrementHandler}  />
//                <HCClickCounter count={count} incrementHandler={this.incrementHandler} />
//             </div>
//         )
//     }
// }

// /*
//     Here I tried to make a single parent component as the  both HCHoverCounter and HCClickCounter as same function
//     bt as it has single state is updated, both are updating at the same time, 
//     when I clciked on the btn it is updated the hover too,
//     No way here also when need to duplicate ==> Conclusion
// */

// export default HCClickHoverParent

/* Using hoc we can achieve this :) */

import React from 'react'

/* This is the hoc pattern */

const hcClickHoverParent = (WrapppedComponent, incrementNumber) => {                  /* Passing component as argumnet */
    class HCClickHoverParent extends React.Component {             /* New Class Component */
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        
        clickHandler=()=>{
              /* Since we need Previous state to increment the value the argument to set state will not be a simple object
                    instead it takes in a func prevState as it parameter and returns the new state
        */
            this.setState((prevState)=>{
                return {count: prevState.count + incrementNumber}
            })
        }
        render() {
            /* console.log(this.props.needOfSpreadOperator)  this happens bcz the props are sent to the hoc*/
            return <WrapppedComponent name="I" count={this.state.count} clickHandler={this.clickHandler} {...this.props} />             /* Class name always be caps */
        }
    }    
    return HCClickHoverParent   
}

export default hcClickHoverParent                                   /* Exporting the updated Func */
