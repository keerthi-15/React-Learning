import React, { useState } from 'react'

function HookCounter2() {
    var initialValue = 0;
    const [count, setcount] = useState(initialValue);
    const increment = () => {
        setcount(count + 1);
    }
    const decrement = () => {
        setcount(count - 1);
    }
    // const incrementBy5 = () => {
    //     for (let i = 0; i < 5; i++) {
    //         setcount(count + 1);
    //     }
    // }
    const incrementBy5 = () => {
        for (let i = 0; i < 5; i++) {
            setcount(prevCount => prevCount + 1);
        }
    }
    /* Example for understanding */
    const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
    let text = "";
    for (let i = 0; i < cars.length; i++) {
        text = text + cars[i];
    }
    return (
        <div>count : {count}
            <div>
                <button onClick={increment} >Increment </button> <br />
                <button onClick={decrement}>Decrement </button> <br />
                <button onClick={() => setcount(initialValue)} >Reset </button> <br />
                <button onClick={incrementBy5}>Increment by 5</button>
                <span> {text} </span>
            </div>
        </div>

    )
}

export default HookCounter2