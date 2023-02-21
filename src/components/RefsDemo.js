/* you are creating a input field in login page and it should be autofocused on the page load, in this scenario we can make use ref */
// import React, { Component } from 'react'

// class RefsDemo extends Component {

//     constructor(props) {
//         super(props)
//         this.inputRef= React.createRef()
//     }
//     componentDidMount(){
//         this.inputRef.current.focus()
//         console.log(this.inputRef) /* Now in console u'll be able to see {current: input} inside that u'll having autoFocus */
//     }
//     clickHandler=()=>{
//         alert(this.inputRef.current.value) /* Now u'll be able acces the valiue using ref */
//     }
//     render() {
//         return (
//             <div> 
//                <label>User Name: </label>
//                {/* <input type="text" autoFocus />  /* This one is found by me, we can directly give autoFocus, bt for understanding ref we gonna call this using ref */}
//                 <input type="text" ref={this.inputRef} ></input> {/* For autoFocus*/}
//                 <button onClick={this.clickHandler}>Click</button>
//             </div>
//         )
//     }
// }

// export default RefsDemo

/* Steps to create Call back Refs */
import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)
        this.callBackRef=null   /* step 1: we need to create a property and assign a value of null */
        this.setCallBackRef=(element)=>{  /* Step2: We will create a method, that will assign a DOM element to the ref we've created in step 1 , this is the method which set our ref*/
            this.callBackRef=element
        }                       
    }
    componentDidMount(){
        /* step 4: this.callBack calls element when component mounts and call null when unmounts*/
        if(this.callBackRef){         
            this.callBackRef.focus()    /* we directly accesed the DOM property we don't need current as we used in above*/
        }
    }
    clickHandler=()=>{
        alert(this.callBackRef.value)
    }
    render() {
        return (
            <div>
                <label>User Name: </label>
                <input type="value" ref={this.setCallBackRef} /> {/* step 3: Attach this ref to the input element by calling this.setCallBackRef */}
                <button onClick={this.clickHandler}> Click</button>
            </div>
        )
    }
}

export default RefsDemo
