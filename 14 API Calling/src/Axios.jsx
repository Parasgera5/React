import React from 'react'
import axios from 'axios'

const Axios = () => {
  const getData = async () => {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    // console.log(response) // This will log the Response object, which contains information about the response from the server, such as status code, headers, etc. We need to use response.data to get the actual data from the response.
    // const data = response.data
    // console.log(data)
    
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(data)


  }

  return (
    <div>
        <button onClick={getData}>get data from axios api calling.</button>
    </div>
  )
}

export default Axios