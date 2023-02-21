import React, { Component } from 'react'

class FormHandling extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             value:" ",
             comments:" ",
             topic:" React " //Default u shld keep some value if not the 1st value wont get selected
        }
    }
    
    changeHandler=(event)=>{
        this.setState({
           value: event.target.value  // event.target means => Anytime u change the value it is captured by event.target
        })
    }

    changeHandlerComments=(event)=>{
        this.setState({
            comments:event.target.value  //value we should give not comments
        })
    }

    changeHandlerTopics=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }

    submit=(event)=>{
        alert(`User name: ${this.state.value} Comments: ${this.state.comments} Topic Selected: ${this.state.topic}`)
        event.preventDefault() // it will prevent the page getting refreshed by default
    }

    render() {
        return (
            <form onSubmit={this.submit}> {/* here we are calling onSubmit attribute which turn trigger event when we click on submit btn */}
                <div>
                    <label>User Name: </label>
                    <input value={this.state.value} onChange={this.changeHandler} ></input>
                </div>
                &nbsp;
                <div>
                    <label>Comments: </label>
                    <textarea value={this.state.comments} onChange={this.changeHandlerComments}></textarea>
                </div>
                &nbsp;
                <div>
                    <label>Topic: </label>
                    <select value={this.state.topic} onChange={this.changeHandlerTopics} >
                        <option value="react">
                            React
                        </option>
                        <option value="angular">
                            Angular
                        </option>
                        <option value="vue">
                            Vue
                        </option>
                    </select>
                </div>
                &nbsp;
                <div>
                <button type='submit'>Submit</button>  {/* Now on default submit the page gets refreshed, this is because u gave type='submit' and normal form tag behaviour on submit of anything an event should be triggered, so in form tag (see above ) or else u can call onSubmit directly here too*/}
                </div>
                
            </form>
        )
    }
}

export default  FormHandling
