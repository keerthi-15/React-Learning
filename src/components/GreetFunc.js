import react from 'react';

// Normal Function...

// function Greet(){
//     return <h1>Hi, Keerthi !</h1>
// }

//Arrow Function....

//  const Greet = () => {
//     return <h1>Hi, Keerthi</h1>
//  }

//Arrow Function where return statement is not required if it is one line...

 const Greet = () => <h1>Hi, Keerthi</h1>

export default Greet;

/*
    Differences between named export and default export!
    Named export => same functional name should be called while importing in the different component
        For Example: here we use Greet as component name same name should be used in App.js file while importing!
        That too within {Greet}
        export const Greet = () => <h1>Hi, Keerthi </h1>  (in greet.js and in app.js import {Greet} from './')

    Default export => We can use any name to import in App.js component
*/

//named export 

//  export const Greet = () => <h1>Hi, Named Export!</h1>