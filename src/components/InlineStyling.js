/* 
Inline styling are represented in object format and key in camelCase and value in string

for inline we need to use inline tag style={}
*/

import React, { Component } from 'react'

class InlineStyling extends Component {
    render() {
        const heading = {
            fontSize:'72px',
            color:'violet'
        }
        return (
            <div>
               <h3 style={heading} >Inline Styling</h3> 
            </div>
        )
    }
}

export default InlineStyling
