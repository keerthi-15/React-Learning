import React, { Component } from 'react'

class LimitUseEffectClass extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       x : 0,
       y : 0
    }
  }
  logMouseEvent = (e) =>{
    this.setState({
      x : e.clientX,
      y : e.clientY
    })
  }
  componentDidMount(){
    window.addEventListener('mousemove',this.logMouseEvent)
  }
  componentWillUnmount(){
    window.removeEventListener('mousemove',this.logMouseEvent)   // this for un Mount
  }
  render() {
    return (
      <div>
        <span>
          x : {this.state.x} &nbsp; y : {this.state.y}
        </span>
      </div>
    )
  }
}

export default LimitUseEffectClass