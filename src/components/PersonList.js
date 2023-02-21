/* to make better we can make

            NameList component as => responsible rendering the list
            PersonList component as => responsible for rendering person HTML

*/

/*  Functional component*/

// import React from 'react'

// function PersonList( {person} ) {
//     return (
//         <div>
//             <h5> ID NO:  {person.id} Hi, I'm  {person.name} and my Skill is  {person.skill} </h5> 
//         </div>
//     )
// }

// export default PersonList

/* State component */

import React, { Component } from 'react'

class PersonList extends Component {
    render() {
       //const {persons,key} =this.props/* warning: PersonList: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. */
       const {persons} =this.props  /* Here we are destructuring the props keerthi, so this.props la ur taking only persons */
        return (
            <div>
                <h5>ID NO: {persons.id}, Hi, this is {persons.name} and I'm good at {persons.skill} </h5> 
            </div>
        )
    }
}

export default PersonList

