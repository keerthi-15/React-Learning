import React, { Component } from 'react'
import hcClickHoverParent from './HCClickHoverParent'

class HCClickCounter extends Component {
    render() {
        let {count, name, clickHandler, needOfSpreadOperator } = this.props
        return (
            <button onClick={clickHandler}> {name} Clicked {count} Times {needOfSpreadOperator}</button>  
        )
    }
}

export default hcClickHoverParent(HCClickCounter,5)
