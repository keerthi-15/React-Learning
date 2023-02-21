/* 
    Main here this keyword Pls go through this keyword and how value in this keyword is determined in JS
    Your doubt => we gonna change the msg, there we updated
    Here if u call it will show ur application breaks this is because of this keyword is undefined
    It shows, this keyword is undefined within our event handler, this is bcz of typical behavior in JS
    Because of this keyword is undefined, bidnding of event handler is neceesary in react
    
*/

/* Necesstiy of binding event handler */

// import React, { Component } from 'react'

// class EventHandlingClass extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              message:"Hello"
//         }
//     }

//     clickHandler(){
//         // this.setState({
//         //     message:"Good Bye"    /* this will throw an error  */
//         // })
//         console.log(this);       /* to check this is undefined in console */
//     }
    
//     render() {
//         return (
//             <div>
//               <span> {this.state.message} </span>  &nbsp;
//               <button onClick={this.clickHandler}>Click Here Pls</button>
//             </div>
//         )
//     }
// }

// export default EventHandlingClass

/* Method 1: Binding in render  */

// import React, { Component } from 'react'

// class EventHandlingClass extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              message:"Hey, Hi"
//         }
//     }

//     clickHandler(){
//         this.setState({
//             message:"Good Bye"
//         })
//     }
    
//     render() {
//         let message = this.state.message
//         return (
//             <div>
//                <p>{message}</p> 
//                <button onClick={this.clickHandler.bind(this)}>Click</button>
//             </div>
//         )
//     }
// }

// export default EventHandlingClass

/* Method 2: Arrow function in render */

// import React, { Component } from 'react'

// class EventHandlingClass extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              msg:"bye"
//         }
//     }

//     click(){
//         this.setState({
//             msg:"Hi"
//         })
//     }
    
//     render() {
//         let msg= this.state.msg
//         return (
//             <div>
//                 <p>{msg}</p>
//                 <button onClick={()=>this.click()}>Click</button>
//             </div>
//         )
//     }
// }

// export default EventHandlingClass

/* In this we had a doubt why we are using () here in onClick function, Bcz...
 
      calling the event handler and returning tht value, that is why parenthesis is required in this approach
      
      onClick={()=>this.click()}  --> here we didn't use curly braces or return keywordin arrow fn body, bcz it is single line

*/

/* Method 3: Binding in the class constructor */
// import React, { Component } from 'react'
 
// class EventHandlingClass extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              msg:"Hello"
//         }
//         this.click=this.click.bind(this)
//     }

//     click(){
//         this.setState({
//             msg:"Bye!"
//         })
//     }
    
//      render() {
//          return (
//              <div>
//                  <p>{this.state.msg}</p>
//                  <button onClick={this.click}>Click</button>
//              </div>
//          )
//      }
//  }
 
//  export default EventHandlingClass

/* Method 4: class property as arrow function */

import React, { Component } from 'react'

class EventHandlingClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:"Are u okay?"
        }
    }
    click=()=>{
        this.setState({
            msg:"yeah!"
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.msg}</p>
                <button onClick={this.click}>Tap</button>
            </div>
        )
    }
}

export default EventHandlingClass

