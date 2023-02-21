import React, { Component } from 'react'

class HoverCounterTwo extends Component {
    render() {
        let { count, incrementCount } = this.props
        return (
            <h3 onMouseOver={incrementCount}>Hover {count} Times</h3>
        )
    }
}

export default HoverCounterTwo
