import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:''
      }
    }
    /* Life Cycle methods*/
    componentDidMount(){
        document.title = `You clicked count ${this.state.count} times `;
    }
    componentDidUpdate(prevProps,prevState){
      if(prevState.count !== this.state.count){   //prevState.count rba mukiyum prevState la count ah pakkuren
        console.log('Updates the document');
        document.title = `You clicked count ${this.state.count} times `;
      }
    }
  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
        <button onClick={()=>this.setState({count:this.state.count+1})}>Add a Count</button>
      </div>
    )
  }
}

export default ClassComponent