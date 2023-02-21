import React, { useEffect, useState } from 'react'

function InCorrectDependency() {
    const [count, setCount] = useState(0)
    const tick = () => {
        setCount(prevCount => prevCount + 1) // prevCount nu podura na arrow func
    }
    // useEffect(() => {
    //     const interval = setInterval(tick, 1000)
    //     return () => {
    //         clearInterval(interval)
    //     }
    // },[count])   //One way to slove
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    },[])   //2nd way pass prevCount in above func
    return (
        <div>
            {count}
        </div>
    )
}

export default InCorrectDependency

/*
Naan ena understand panikitana, ipo dependency array empty na orae oru thadava render agum apo 
count vale 1 update agum , so avlodhan nu stop panidum 
ipo nee count nu dependency array la potta count increase aga athuvum agum,
2nd soln nee prevState vachu potta solve agidum
*/