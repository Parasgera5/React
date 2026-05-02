import React, { use, useEffect, useState } from 'react'

const App = () => {
  // mounting -> useEffect called
  // updating -> useEffect called
  // unmounting -> useEffect called
  // when we click the button, the num state changes and the component re-renders. During this re-rendering, the useEffect hook is called again, which is why we see 'useEffect called' in the console every time we click the button. This demonstrates that useEffect is called after every render, including the initial mount and subsequent updates.
  const [num, setNum] = useState(0)
  // useEffect(() => {
  //   console.log('useEffect called')
  // }); // on every render, useEffect will be called and 'useEffect called' will be logged to the console. This is because there is no dependency array provided, so useEffect will run after every render, including the initial mount and subsequent updates. Therefore, every time the button is clicked and the num state changes, the component re-renders and useEffect is called again, resulting in 'useEffect called' being logged to the console each time.
  useEffect(() => {
    console.log('useEffect called')
  }, []); // dependency array is empty, so useEffect will only be called once when the component mounts and not on subsequent updates. This is because there are no dependencies that would trigger the effect to run again when they change. Therefore, 'useEffect called' will only be logged to the console once, regardless of how many times the button is clicked and the num state changes.
  const click = (e) => {
    setNum(num + 1)
    // console.log('clicked')
  }
  return (
    <div>
      <button onClick={(e) => {
        click(e)
      }}>click</button>
    </div>
  )
}

export default App