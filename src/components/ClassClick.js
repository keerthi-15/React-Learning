import React, { Component } from 'react'

class ClassClick extends Component {
 
/* One way of writing method */    
    confirm(){
        console.log("U did it");
    }

/* 2nd way => as it is doen in class coponent no need of let, function keywords!, but in functional component u need that */
// confirm =()=>{
//     console.log("Yeahhhh!");
// }    
    render() {
        return (
            <div>
                <button onClick={this.confirm}>Yeah, u can do it</button>
                {/* <button onClick={ ()=> this.confirm()}>Yeah, u can do it</button> this kinda call of func can be done only in react  both will result the same :)*/ }
            </div>
        )
    }
}

export default ClassClick
