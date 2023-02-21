import React, { useContext } from 'react'
import { ChannelContext, UserContext } from '../App'

function ComponentBFunc() {
    let array = [5,5,5,5,5];
    let index = 1;
    let funct = array.reduce((accumulator,currentValue)=>accumulator+currentValue,index);
   const user = useContext(UserContext)
   const channel = useContext(ChannelContext)
  return (
    <div>
      ````  {user} {channel} ````  <br/>
      {funct}
    </div>
  )
}

export default ComponentBFunc