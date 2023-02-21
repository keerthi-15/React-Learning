import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
{/* Keerthi  ---------> ( Here we called directly )  */}
{/* {this.props.name} -----> (next way of calling the same string by passing props whose value is string) */}
{/* (next way of calling the same string by passing props whose value is func) This contains reference to a func, here ur calling func so add()  */}
                {/* {this.props.name()}   */}
{/* Next we will be having parameter, based on the parameter we need to change what is rendered by this User component   */}     
                {/* {this.props.name(false)}      */}
{/* Next step we will change that to prop name to render, this will not affect render lifeCycle in any way */}   
                {this.props.render(true)}                              
            </div>
        )
    }
}

export default User