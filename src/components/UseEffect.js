import React, { useEffect, useState } from 'react'

function UseEffect() {
  let initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const [name, setName] = useState('');
  useEffect(() => {
    console.log('useEffect- renders...')
    document.title = `You clicked ${count} times `;
  },[count])
  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Add a Count</button>
    </div>
  )
}

export default UseEffect
/*
My understanding on useEffect: useEffect eh oru func so athula ne arrow func pottu eluthura
 */