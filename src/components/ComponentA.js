import React, { Component } from 'react'
import ComponentB from './ComponentB'

class ComponentA extends Component {
  render() {
    return (
      <div>
        ComponentA <br/>
        <ComponentB />
      </div>
    )
  }
}

export default ComponentA