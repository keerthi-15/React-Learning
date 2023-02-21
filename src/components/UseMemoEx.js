import React, { useMemo, useState } from 'react'

function UseMemoEx() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const incrementOne = () => {
        setCountOne(countOne + 1)
    }

    const incrementTwo = () => {
        setCountTwo(countTwo + 1)
    }

    const isEven = useMemo(() => {
        // To make Slow rendering
        let i = 0
        while (i < 2000006665) i++
        return countOne % 2 === 0
    }, [countOne])

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Counter One - {countOne} </button> &nbsp; {isEven ? 'Even' : 'odd'}
                {/* ipo nee isEven maatum pottana oru tym dhan call agum render apo athuvae isEven() potta each tym render agum 
                    after using useMemo ipo isEven vanthu function kedaiyathu ' Uncaught TypeError: isEven is not a function'
                    ipo value store panra oru variable
                */}
            </div>
            <div>
                <button onClick={incrementTwo}>Counter Two - {countTwo} </button>
            </div>
        </div>
    )
}

export default UseMemoEx