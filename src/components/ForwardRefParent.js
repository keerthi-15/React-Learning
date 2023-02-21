/* From here I'm gonna forward the ref to child*/
import React, { Component } from 'react'
import ForwardRefChild from './ForwardRefChild'

class ForwardRefParent extends Component {

    constructor(props) {
        super(props)
            this.inputRef=React.createRef()
    }
    clickHandler=()=>{
        this.inputRef.current.focus()   /* Here u shld use current don't confuse with class refs*/
    }
    
    render() {
        return (
            <> 
               <label>User Name: </label>
               <ForwardRefChild ref={this.inputRef} />  &nbsp; {/* which should be highlighted there u pass the ref*/}
               <button onClick={this.clickHandler}>Click Here</button>
            </>
        )
    }
}

export default ForwardRefParent
