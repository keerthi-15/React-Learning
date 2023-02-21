import React, { Component } from 'react'

 class RefinClassComponentTwo extends Component {
    interval // Intsance Field or class Property
    constructor(props) {
      super(props)
    
      this.state = {
         timer:0
      }
    }

    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState((prevTimer)=>({     //Make sure of the parenthesis
                timer : prevTimer.timer+1
            }))
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

  render() {
    return (
      <div>
        Count - {this.state.timer} <br />
        <button onClick={()=>clearInterval(this.interval)} >Class Interval</button>
      </div>
    )
  }
}

export default RefinClassComponentTwo