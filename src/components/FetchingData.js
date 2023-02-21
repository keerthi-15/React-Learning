// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// function FetchingData() {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(res => {
//         console.log(res)
//         setPosts(res.data)
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   },[]) //This is the line which prevents on loading the values again and again
//   return (
//     <div>
//       <ul>
//         {
//           posts.map(post => (
//             <li key={post.id} > {post.title} </li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// }

// export default FetchingData
 
/* Fetching Individual posts */

// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// function FetchingData() {
//   const [post, setPost] = useState([]);
//   const [id,setId] = useState(1)
//   useEffect(() => {
//     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then(res => {
//         console.log(res)
//         setPost(res.data)
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   },[id ]) //This is the line which takes for the conditional rendering
//   return (
//     <div>
//       <input type='text' value={id} onChange={(e)=>setId(e.target.value)} />
//       {post.title}
//     </div>
//   )
// }

// export default FetchingData

/* Fetching data on button click */

// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// function FetchingData() {
//   const [post, setPost] = useState([]);
//   const [id,setId] = useState(1);
//   const [idFromButton,setIdFromButton] = useState(1)
//   const handleClick = ()=>{
//     setIdFromButton(id)
//   }
//   useEffect(() => {
//     axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
//       .then(res => {
//         console.log(res)
//         setPost(res.data)
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   },[idFromButton]) //This is the line which takes for the conditional rendering
//   return (
//     <div>
//       <input type='text' value={id} onChange={(e)=>setId(e.target.value)} />
//       <br/>
//       <button onClick={handleClick}>Fetch Data</button>
//       <br/>
//       {post.title}
//     </div>
//   )
// }

// export default FetchingData

/* My Understanging kosam */

import React, {useState } from 'react'
import axios from 'axios';

function FetchingData() {
  const [post, setPost] = useState([]);
  const [id,setId] = useState(1)
  const handleClick = () =>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
      console.log(res)
      setPost(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <div>
      <input type='text' value={id} onChange={(e)=>setId(e.target.value)} />
      <br />
      <button onClick={handleClick}>Fetch Data</button>
      <br />
      {post.title}
    </div>
  )
}

export default FetchingData