import React, { Component } from 'react'
import hcClickHoverParent from './HCClickHoverParent'

class HCHoverCounter extends Component {
    render() {
        let {count, clickHandler, name, needOfSpreadOperator } = this.props
        return (           
            <div style={{float:'left', marginTop:'60px', marginLeft:'60px'}} onMouseOutCapture={clickHandler}>
               {name} Hovered {count} times {needOfSpreadOperator}
            </div>
        )
    }
}

export default hcClickHoverParent(HCHoverCounter,10)     /* while exporting we will call UpdatedComponent func passing in the HCHoverCounter component */
