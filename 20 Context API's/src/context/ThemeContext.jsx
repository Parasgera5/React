import React from 'react'
import { createContext } from 'react'

export const ThemeDataContext = createContext() // createContext is a function which creates a context object and returns it. It is used to create a context for the theme data. It is used to pass the theme data from the parent component to the child component without using props. It is used to avoid prop drilling. It is used to share data between components without passing props through every level of the component tree.


const ThemeContext = (props) => {
  return (
    <div>
        {/* {props.children}  it will print all the children in one go */}
        <ThemeDataContext.Provider value="light">
            {props.children}
        </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext