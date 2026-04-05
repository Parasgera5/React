import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    console.log("form submitted by: " + title)
    e.preventDefault()
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
        type="text"
        placeholder='enter your name'
        // value=''
        value={title}
        onChange={(e) => {
          console.log(e.target.value)
          setTitle(e.target.value)
        }}/>
        <button>Click Here</button>
      </form>
    </div>
  )
}

export default App