import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegComp from './RegComp';

/* Parent component as Regular */

class ParentForPureReg extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Vishwas'
        }
    }

    //Setting the name which renders dor every 2 secs

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'Vishwas'  // this will render once for pureComp
                // name:'Keerthi' // this will render twice for pureComp
            })
        }, 2000);
    }
    
    render() {
        console.log('***************** Parent Component *****************')
        return (
            <div>
                Parent Component {this.state.name}
                {/* <PureComp name={this.state.name} />
                <RegComp name={this.state.name} /> */}
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentForPureReg


/* Parent component as PureComponet => this will render only once because here we compare prevState with currentState */
/*
class ParentForPureReg extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Vishwas'
        }
    }

    //Setting the name which renders dor every 2 secs

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'Vishwas'
            })
        }, 2000);
    }
    
    render() {
        console.log('***************** Parent Component *****************')
        return (
            <div>
                Parent Component
                <PureComp name={this.state.name} />
                <RegComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentForPureReg
*/

/* 
To know here : if parent doesn't re-render, child component will also won't re-render
*/