import React, { Component } from 'react'

class LifeCycleMountChild extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Keerthi'
        }
        console.log('LifeCycleB Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }
    render() {
        console.log('LifeCycleB render')
        return (
            <div>
                LifeCycleB components Mounting (child)
            </div>
        )
    }
}

export default LifeCycleMountChild
