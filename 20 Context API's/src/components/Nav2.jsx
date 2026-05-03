import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Nav2 = (props) => {
  const data = useContext(ThemeDataContext) // useContext is a hook which is used to consume the context data. It takes the context object as an argument and returns the current context value for that context. The current context value is determined by the value prop of the nearest <ThemeDataContext.Provider> above the calling component in the tree. If there is no such provider, it returns the default value of the context.
  console.log(data)
  return (
    <div className='nav2'>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Contact</h1>
        <h1>Profile</h1>
        <h1>{data}</h1>
    </div>
  )
}

export default Nav2




// import React from 'react'

// const Nav2 = (props) => {
//   return (
//     <div className='nav2'>
//         <h1>Home</h1>
//         <h1>About</h1>
//         <h1>Contact</h1>
//         <h1>Profile</h1>
//         <h1>{props.theme}</h1>
//     </div>
//   )
// }

// export default Nav2