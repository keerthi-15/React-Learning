import React from "react";

/* Declaring States
    1. constructor () => state are defined inside this
    2. super () => extends react components, a call should happen to call base class contructor
                => it is not a function so don't use {} "I made this mistake :)"
    3. this.state => is object
    4. this.setState({}) => braces inside we will have flower braces
 */

class StateComponent extends React.Component{
    // constructor(){
    //     super()
    //         this.state={
    //             message: "Welcome Anand!"           
    //     }
    // }

    // change=()=>{
    //     this.setState({
    //         message:"Thank you Anand!"
    //     })
    // }

    /* The above function can also be written as and this requires to change the onClick attribute also */
    // change (){
    //     this.setState({
    //         message:"Thank you!"
    //     })
    // }
    // render(){
    //     return(
    //         <div>
    //             <h5> {this.state.message} </h5>
    //             {/* <button onClick={this.change}>Subscribe</button> */}
    //             <button onClick={()=>this.change()}>Subscribe</button>
    //         </div>
    //     ); 
    // }
    return (<p>)
}

export default StateComponent;

/*
======================================================================
What I learned here is ...
        *** State an object privately maintined in a component, 
                    influence what is rendered in browser, 
                            state values can be changed!  *** 
=======================================================================
*/