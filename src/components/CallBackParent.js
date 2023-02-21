import React, { useCallback, useState } from 'react'
import CallBackChildOne from './CallBackChildOne'
import CallBackChildTwo from './CallBackChildTwo'
import CallBackTitle from './CallBackTitle'

function CallBackParent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(25000)

    const ageIncrement = useCallback(() => {
        setAge(age + 1)
    },[age]) 

    const salaryIncrement = useCallback(() => {
        setSalary(salary + 1000)
    },[salary])

    return (
        <div>
            <CallBackTitle title='UseCallBack Method Performance check' />
            <CallBackChildOne text='Age' count={age} />        {/* please no this, how we are sending props orae attribute but 2 diff values di */}
            <CallBackChildTwo handleClick={ageIncrement}>Age Increment</CallBackChildTwo>
            <CallBackChildOne text="Salary" count={salary} />
            <CallBackChildTwo handleClick={salaryIncrement}>Salary Increment</CallBackChildTwo>
        </div>
    )
}

export default CallBackParent  //FYI ingha naan React.memo podaala , BCZ ingha pottalum no change d child component dhanae render aguth un neceesarily