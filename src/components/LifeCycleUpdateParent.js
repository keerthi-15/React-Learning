import React, { Component } from 'react'
import LifeCycleUpdateChild from './LifeCycleUpdateChild'

class LifeCycleUpdateParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Vishwas'
        }
        console.log('LifeCycle A Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycle A getDerivedStateFromProps')
        return null
    }
    shouldComponentUpdate(nextProp,nextState){
        console.log('LifeCycle A shouldComponentupdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProp,pervState){
        console.log('LifeCycle A getSnapShotBeforeUpdate')
        return null
    }
    componentDidMount(){
        console.log('LifeCycle A componentDidMount')
        return null
    }
    componentDidUpdate(prevProps,prevState,snapShot){
        console.log('LifeCycle A componenetDidUppdate')
        return null
    }
    change=()=>{
        
        this.setState({
            name:'check the console for values'
        })
        
    }
    render() {
        console.log('LifeCycle A render')
        return (
            <div>
               <p>LifeCycle Update Parent </p>
               <LifeCycleUpdateChild />
               <button onClick={this.change} >To See Component update</button>
            </div>
        )
    }
}

export default LifeCycleUpdateParent
/*
Order of execution:
on page load,

LifeCycle A Constructor
LifeCycle A getDerivedStateFromProps
LifeCycle A render
LifeCycle B Constructor
LifeCycle B getDerivedStateFromProps
LifeCycle B render
LifeCycle B componentDidMount         =======> 1st child component is executed
LifeCycle A componentDidMount         =======> 2nd parent component is executed

after clicking the btn,
LifeCycle A getDerivedStateFromProps
LifeCycle A shouldComponentupdate
LifeCycle A render
LifeCycle B getDerivedStateFromProps
LifeCycle B shouldComponentupdate
LifeCycle B render
LifeCycle B getSnapShotBeforeUpdate      =======> 1st child component is executed   *********
LifeCycle A getSnapShotBeforeUpdate      =======> 2nd parent component is executed  *********
LifeCycle B componenetDidUppdate         =======> 1st child component is executed
LifeCycle A componenetDidUppdate         =======> 2nd parent component is executed




*/