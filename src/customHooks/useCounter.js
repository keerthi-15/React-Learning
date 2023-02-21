import { useState } from 'react'

function useCounter(initialValue = 0, value) { // Ingha ne pakka vendiyathu na ipo inbuild ah naan 0 anupure suppose naan call panra edathula initial value mention panalana 0 eduthukum

    const [count, setCount] = useState(initialValue)

    const increment = () => {
        setCount(prevCount => prevCount + value)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }

    const reset = () => {
        setCount(initialValue)
    }
    return [count, increment, decrement, reset]  // returning of any JSX our custom hook is gonna return array of values
}

export default useCounter