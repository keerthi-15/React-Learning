import React, { Component } from 'react'
import RefsClassComponentChild from './RefsClassComponentChild'

class RefsClassComponentParent extends Component {

    constructor(props) {
        super(props)
    
        this.componentRef=React.createRef()
    }
    
    clickHandler = () => {
        this.componentRef.current.focusInput()   //Directly we are calling the function in child component Don't forget current
    }

    render() {
        return (
            <>
                <RefsClassComponentChild ref={this.componentRef} />
                <button onClick={this.clickHandler}> Click For Change</button> 
            </>
        )
    }
}

export default RefsClassComponentParent
