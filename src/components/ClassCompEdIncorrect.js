import React, { Component } from 'react'

class ClassCompEdIncorrect extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    componentDidMount(){
        this.interval = setInterval(this.time,1000)
    }
    time = ()=>{
        this.setState({count:this.state.count+1})
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
  render() {
    return (
      <div>
        {this.state.count}
      </div>
    )
  }
}

export default ClassCompEdIncorrect