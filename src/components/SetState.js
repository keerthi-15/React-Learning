/* using ES7 snippets */

import React, { Component } from 'react';

class SetState extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

/* Normal setState */    
increment = () =>{
    this.setState({
       count: this.state.count + 1
    })
    console.log(this.state.count);  // the console value will be less than 1 compared to the rendered value if count : 1 then console value will be 0
   }
/* setState with call back function */  
decrement = () =>{
       this.setState({
            count: this.state.count -1
       },
       () => {
            console.log('Call back value',this.state.count);
       })
       console.log('set state -1 ',this.state.count); // the console value will be less than 1 compared to the rendered value
   }

/* This is an example if we update state values directly 
   note clearly value won't get rendered in UI but value gets updated!
*/   
// console ()  {
//     this.state.count = this.state.count + 2
//     console.log(this.state.count);
// }   
    
    render() {
        return (
            <div>
                <span>Count : {this.state.count} </span> &nbsp;
                <button onClick={this.increment}>Increment</button> &nbsp;
                <button onClick={this.decrement}>Decrement</button> 
                {/* &nbsp; <button onClick={()=> this.console()}>Check console</button> */}
                {/* <button onClick={this.console}>Check console</button> This also shld wrk :) */}
            </div>
        )
    }
}

export default SetState;

/* 
======================================================================
    => rce    -- class component
    => rconst -- constructor

*** Constructor should be written inside a class and function also 
            not inside render() method ***    
=======================================================================
*/

/*
=======================================================================
The console value will be less than 1 compared to the rendered value bcz,
     call for setState is Asynchronous, 
         the this.state.count is called before the state is actually set
=======================================================================

*/

/*
======================================================================
To change a state value we must use setState

if we update a state lyk this.state.count = this.state.count + 1 this will rendered in console not in UI

======================================================================

onClick={()=> this.console()} => this type of call works only in class compoenent and not in functional compoenent
*/

