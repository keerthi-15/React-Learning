import React, { Component } from 'react'
import LifeCycleMountChild from './LifeCycleMountChild'

class LifeCycleMount extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'vishwas'
        }
        console.log('LifeCycleA Constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStatefromProps')
        return null;        
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }
    
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
               <p>Mounting LifeCycle Methods </p>
               <LifeCycleMountChild />
            </div>
            
        )
    }
}

export default LifeCycleMount

/*
Order of execution:
LifeCycle Constructor
LifeCycle render
LifeCycle componentDidMount

why we didn't get static getDerivedStateFromProps bcz we called console statement after returning null

After changing:

LifeCycle Constructor
LifeCycle getDerivedStatefromProps
LifeCycle render
LifeCycle componentDidMount

After calling child Component:

LifeCycleA Constructor
LifeCycleA getDerivedStatefromProps
LifeCycleA render
LifeCycleB Constructor
LifeCycleB getDerivedStateFromProps
LifeCycleB render
LifeCycleB componentDidMount
LifeCycleA componentDidMount
*/