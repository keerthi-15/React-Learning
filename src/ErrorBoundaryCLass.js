import React, { Component } from 'react'

class ErrorBoundaryCLass extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    
    static getDerivedStateFromError(error){
        return {
            hasError:true
        }            
    }
    componentDidCatch(error,info){
        console.log(error)  /* Same will be rendered when page loads too, bcz react renders in console defaultly  */
        console.log(info)                               
    }
    render() {
        if(this.state.hasError){
            return <h3> Something Went Wrong! </h3>
        }
        else{
           return this.props.children                      //here u r using else condition so it is JSX, so don't use {}
        }

    }
}

export default ErrorBoundaryCLass
