import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    console.log("form submitted")
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input type="text" placeholder='enter your name' />
        <button>Click Here</button>
      </form>
    </div>
  )
}

export default App