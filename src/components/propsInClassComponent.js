import React from "react";

class PropsInClassComponent extends React.Component{
    render(){
        return(
            <div>
                <h2>Props In Class Component!</h2>
                <span>Welcome {this.props.name} </span>
                {this.props.children}
            </div>
        )
    }
}

export default PropsInClassComponent;

/*
======================================================================
What I learned here is ... Props are immutable
        i.e their value can't be changed!
            u can't mention props.name="XYZ"
=======================================================================
*/