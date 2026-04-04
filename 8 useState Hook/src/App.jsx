import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const increase = () => {
    setNum(num + 1)
  }
  const decrease = () => {
    setNum(num - 1)
  }
  const inc5 = () => {
    setNum(num + 5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={inc5}>increase by 5</button>
    </div>
  )
}

export default App



// import React, { useState } from 'react'

// const App = () => {

  
//   const [num, setNum] = useState(0)
//   const [name, setName] = useState("hello")
//   const [users, setUsers] = useState([0, 1, 2, 3, 4])
//   const change = () => {
//     setNum(num + 1);
//     setName("world")
//     setUsers([...users, 5])
//   }
//   return (
//     <div>
//       <h1>The value of num is: {num} <br /> The value of name is: {name} <br /> The value of users is: {users.join(" ")}</h1>
//       <button onClick={change}>Click Here</button>
//     </div>
//   )
// }

// export default App