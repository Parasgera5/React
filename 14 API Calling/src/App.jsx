import React from 'react'

const App = () => {
  // const getData = async () => {
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  //     const data = await response.json()
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // there are two methods to call an API in React, one is using fetch(in built in javascript - we get it through web api) and the other is using axios(third party library).

  // const getData = () => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  //     .catch(error => console.log(error))
  // }

  // const getData = () => {
  //   const data = fetch('https://jsonplaceholder.typicode.com/todos/1');
  //   console.log(data) // This will log a Promise object, because fetch is an asynchronous operation and it returns a Promise. We need to use .then() or async/await to get the actual data from the Promise.
  // }


  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response) // This will log the Response object, which contains information about the response from the server, such as status code, headers, etc. We need to use response.json() to get the actual data from the response.
    const data = await response.json()
    console.log(data)
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App