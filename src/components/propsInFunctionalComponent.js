import React from "react";

/* Functional component */

/* to check in console what are the props passed  and console.log() should not be inside return statement */

let PropsPassing = (props) =>{
    console.log(props)
    return (
        <div>
            <h4>Hi, This is an example for passing Props</h4>
            {props.children}
            <h5>Hi, {props.name} a.k.a {props.heroName} </h5>
        </div>
    );
}

export default PropsPassing;

/*
======================================================================
What I learned here is ... Props are immutable
        i.e their value can't be changed!
            u can't mention props.name="XYZ"
=======================================================================
*/
