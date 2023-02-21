import {useState} from 'react'

/* What our custom hook do?
    ---> Encapsulate this controlled component behaviour for an input element i.e binding the value and onChange attribute
*/

function useInput(initialValue) {
/*step 1: Create a state variable which basically tracks the input fields value */

    const [value,setValue] = useState(initialValue)
/*Step 2: Create an object with two properties
            1st property : value ( state variable)
*/

    const bind ={
        value,   // using ES6 short hand syntax to specify just value
        onChange : (e) => {setValue(e.target.value)}  // Which will be a func that receives event as its params and setValue
    }
/*Step 3: Create a func reset, which will set the value back to the initial value */

    const reset = () =>{
        setValue('')
    }
    return [value,bind,reset]
/* value -> used in submit handler ie in alert card
   bind -> Instead of value and onChange [ to speacify as an attribute use spread operator]
   reset -> used in submit handler  to empty the input field

*/

}

export default useInput