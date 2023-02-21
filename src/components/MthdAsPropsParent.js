import React, { Component } from 'react'
import MthdAsPropsChild from './MthdAsPropsChild'

class MthdAsPropsParent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             msg:"Parent"
        }
        
        this.parentChild=this.parentChild.bind(this)
    }

    
    parentChild(childName){
        alert(`Hello ${this.state.msg} ${childName}`)   
    }

    render() {
        return (
            <div>
                <MthdAsPropsChild mthdAsProps={this.parentChild} />
            </div>
        )
    }
}

export default MthdAsPropsParent
