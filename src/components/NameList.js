// import React from 'react'

// function NameList() {
//     const nameList = ['Jasper ','Keerthi ','Rajam']
//     return (
//         <div>
//             {
//                 nameList.map(names => <span>{names}</span>)
//             }
//         </div>
//     )
// }

// export default NameList

/* To keep it more precise */
// import React from 'react'

// function NameList() {
//     let nameList=['abc','def','ghi']
//     const name= nameList.map(names => <span>{names}</span>)
//     return (
//         <div>
//             {name}
//         </div>
//     )
// }

// export default NameList


/*

My Learning => as map function is a JS it should written inside {} to make that as JSX

*/

/* without map function all the values will be rendered manually */

// import React from 'react'

// function NameList() {
//     let nameList =['Yeah ' ,'Ur ', 'Correct']
//     return (
//         <div>
//           <span>{nameList[0]}</span>  
//           <span>{nameList[1]}</span>
//           <span>{nameList[2]}</span>
//         </div>
//     )
// }

// export default NameList

/* class component map function */

// import React, { Component } from 'react'

// class NameList extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              nameList:[
//                  'Lakshmi',
//                  'Keerthi',
//                  'Jasper'
//              ]
//         }
//     }
    
//     render() {
//         let names=  this.state.nameList
//         return (
//             <div>
//                 {/* <span>{this.state.nameList[0]}</span> */}
//                 {
//                     names.map(name => <h4>{name}</h4>)
//                 }
//             </div>
//         )
//     }
// }

// export default NameList

/* Array Of objects */

// import React from 'react'
// import PersonList from './PersonList'

// function NameList() {
//     const personNames = [
//         {
//             id:1,
//             name:"A",
//             skill:"React"
//         },
//         {
//             id:2,
//             name:"B",
//             skill:"Angular"
//         },
//         {
//             id:3,
//             name:"C",
//             skill:"Communication"
//         }
//     ]
//     const personList= personNames.map(person => <PersonList person={person} />)
//     return (
//         <div>
//         {personList}
//         </div>
//     )
// }

// export default NameList

/* Array Of objects  in class component */

import React, { Component } from 'react'
import PersonList from './PersonList'

export class NameList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             personList:[
                 {
                     id:1,
                     name:"A",
                     skill:"React"
                 },
                 {
                     id:2,
                     name:"B",
                     skill:"Angular"
                 },
                 {
                     id :3,
                     name:"C",
                     skill:"Communication"
                 }
             ]
        }
    }
    
    render() {
        const personArr=this.state.personList.map((persons,index) => //passing index value
             
                // <PersonList  key="unique" persons={persons} /> // if u send key lyk this Warning: Encountered two children with the same key, `unique`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
            
                // <PersonList  key={persons.id} persons={persons} />
                
                <PersonList  key={index} persons={persons} />  //passing index value to key  make sure u called above as (persons,index)

                )
        return (
            <div>
                {personArr}
                <span> {this.state.personList[0].skill} </span>
            </div>
        )
    }
}

export default NameList




