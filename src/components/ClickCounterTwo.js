import React, { Component } from 'react'

class ClickCounterTwo extends Component {    
    render() {
        let {count,incrementCount} = this.props
        return (
            <button onClick={incrementCount}>Clicked {count} Times</button>
        )
    }
}

export default ClickCounterTwo
