import React, { Component } from 'react'
import { ContextUser } from '../ContextUser'
import ComponentC from './ComponentC'

class ComponentB extends Component {
    static contextType = ContextUser // just replaceable mthd for line 18
  render() {
    return (
      <div>
        ComponentB {this.context} context is an inbuild property
        <br/>
        <ComponentC />
      </div>
    )
  }
}

//ComponentB.contextType = ContextUser // componentName.contextType(this is inbuild func) = engha declare pana React.createContext 
/* This Method will become problem if we had multiple context puriyutha context mela use panom la athu in build varum oru component ku onnu dhn kupda mudiyum */
export default ComponentB