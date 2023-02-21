import React, {useState} from 'react'

// function HookCounter4() {
//     const [numbers,setNumbers] = useState([]);
//     const addRandomNumbers = () =>{
//         setNumbers([...numbers,Math.floor(Math.random() * 10) + 5])
//     }
//   return (
//     <div>
//         <button onClick={addRandomNumbers}>Add an number</button>
//         <ul>
//             {
//                 numbers.map(
//                     num => <li> {num} </li>
//                 )
//             }
//         </ul>
//     </div>
//   )
// }

function HookCounter4() {
    const [numbers,setNumbers] = useState([]);
    const addRandomNumbers = () =>{
        setNumbers([...numbers,{
            id: numbers.length,
            value:Math.floor(Math.random() * 10) + 5
        }])     
    }
  return (
    <div>
        <button onClick={addRandomNumbers}>Add an number</button>
        <ul>
            {
                numbers.map(
                    num => (
                        <li key={num.id}> {num.value} </li>
                    )
                )
            }
        </ul>
    </div>
  )
}

export default HookCounter4
/* Understanding
Math.floor(Math.random() * 10) + 5
==> ithu ena panum na random ah num pass panum *10 paina 10 dhan max value 10 kula ena num venunalum 
    aprm athula nee +5 panra so num 15 kula dhan varum
*/