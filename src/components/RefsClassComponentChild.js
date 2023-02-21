/*
    Refs can be used directly used in class components
    Here we are taking an example :
        To make focus on the input tag when we click on the btn


When we need to achieve ref in child component from parent component
*/

import React, { Component } from 'react'

class RefsClassComponentChild extends Component {

    constructor(props) {
        super(props)
        this.inputRef=React.createRef()
    }
    focusInput=()=>{
        this.inputRef.current.focus() // instead of passing in componentDidMount we are passing in a fn, don't forget current
    }
    
    render() {
        return (
            <>
                <label> User Name: </label>
               <input type="password" ref={this.inputRef}  /> 
               {/* <button onClick={this.clickHandler}> Click For Change</button> */} {/*this can called here directly but we gonna call this onClick function in parent component */}
            </>
        )
    }
}

export default RefsClassComponentChild
