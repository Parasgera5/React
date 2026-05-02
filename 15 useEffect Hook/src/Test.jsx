import React, { useEffect, useState } from 'react'

const Test = () => {
    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(100)
    useEffect(() => {
        console.log('useEffect called on num change')
    }, [num]); // ab ye khali num ki state hone par hi chalegaa
  return (
    <div>
         <h1>Num: {num}</h1>
            <h1>Num2: {num2}</h1>
        <button onMouseEnter={() => setNum(num + 1)} onMouseLeave={() => {setNum2(num2 + 10)}}>Click me</button>
    </div>
  )
}

export default Test