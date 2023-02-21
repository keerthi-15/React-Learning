import React, { Component } from 'react'

class CallBackFunction extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
/* If the code has to be updated after the state has been updated, place the code in call back function which is the 2nd param in setState method */

    // increment=()=>{
    //     this.setState({
    //         count: this.state.count + 1
    //     },
    //     ()=>{
    //         console.log(this.state.count);  // place the code here now for ex we made console
    //     }) 
    //     //console.log(this.state.count); // Don't place it here...
    // }

/* 

For better understanding!  The Output will be 1 bt we expected to be 5 in console u can see call back as 5 count as 1 and asynchronous call 0 5 times
Because React binds multiple set state call within a single update, so here all the setState call are done in one single go

*/
// incrementFive=()=>{
//     this.increment()
//     this.increment()
//     this.increment()      
//     this.increment()
//     this.increment()
// }

/* when u want update the state as previous state value, pass in function as a argument instead of the regular object (this will overcome above issue) */

increment=()=>{
    this.setState((prevState)=>({
        count: prevState.count + 1
    }
    ))
    console.log(this.state.count);
}
// If we want Props
increment=()=>{
    this.setState((prevState, props)=>({
        count: prevState.count + 1 
    }
    ))
    console.log(this.state.count);
}
incrementFive=()=>{
    this.increment()
    this.increment()
    this.increment()      
    this.increment()
    this.increment()
}



    render() {
        return (
            <div>
               <span>Count : {this.state.count}</span> &nbsp;
               <button onClick={this.incrementFive}>Increment</button>
            </div>
        )
    }
}

export default CallBackFunction
