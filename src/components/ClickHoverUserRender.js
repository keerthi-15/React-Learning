/* Using Render props method */
import React, { Component } from 'react'

class ClickHoverUserRender extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incrementCount=()=>{
        this.setState((prevState)=>{
            return({
                count:prevState.count + 1
            })
        })
    }
    render() {
        return (
            <div>
              {this.props.render(this.state.count,this.incrementCount)}  
              {/* {this.props.children(this.state.count,this.incrementCount)}   */}
            </div>
        )
    }
}

export default ClickHoverUserRender

/*
    Thing a learnt here which is very imp:
       I've sent the render not as attribute sent as in between <> </>
       this actually become children, if u put this.props.children that will wrk
*/