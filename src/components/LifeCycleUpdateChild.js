import React, { Component } from 'react'

class LifeCycleUpdateChild extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Vishwas'
        }
        console.log('LifeCycle B Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycle B getDerivedStateFromProps')
        return null
    }
    shouldComponentUpdate(nextProp,nextState){
        console.log('LifeCycle B shouldComponentupdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProp,pervState){
        console.log('LifeCycle B getSnapShotBeforeUpdate')
        return null
    }
    componentDidMount(){
        console.log('LifeCycle B componentDidMount')
        return null
    }
    componentDidUpdate(prevProps,prevState,snapShot){
        console.log('LifeCycle B componenetDidUppdate')
        return null
    }
   
    render() {
        console.log('LifeCycle B render')
        return (
            <div>
               LifeCycle Update Parent 
            </div>
        )
    }
}

export default LifeCycleUpdateChild
