import React from 'react'

const App = () => {

  localStorage.setItem('name', 'John Doe')
  localStorage.setItem('age', '30')

  const name = localStorage.getItem('name')
  const age = localStorage.getItem('age')

  console.log(name, age)

  localStorage.removeItem('age')
  const ageAfterRemoval = localStorage.getItem('age')
  console.log(ageAfterRemoval)

  // localStorage.updateItem('name', 'Jane Doe') // This will not work, there is no updateItem method in localStorage
  const nameAfterUpdate = localStorage.getItem('name')
  console.log(nameAfterUpdate)

  localStorage.setItem('name', 'Jane Doe') // This will update the name since setItem will overwrite the existing value       
  const nameAfterUpdated = localStorage.getItem('name')
  console.log(nameAfterUpdated)

  localStorage.clear(); // This will clear all the items in localStorage
  const nameAfterClear = localStorage.getItem('name')
  const ageAfterClear = localStorage.getItem('age')
  console.log(nameAfterClear, ageAfterClear)

  const user = {
    name: 'John Doe',
    age: 30,
    email: 'abc@gmail.com',
    city: 'New York',
    pincode: 123456
  }

  localStorage.setItem('user', user) // this will store the user object as a string "[object Object]" in localStorage, which is not what we want
  localStorage.setItem('user', JSON.stringify(user)) // We need to stringify the object before storing it in localStorage

  const userFromStorage = localStorage.getItem('user')
  const userObject = JSON.parse(userFromStorage) // We need to parse the string back to an object after retrieving it from localStorage
  console.log(userObject)

  localStorage.removeItem('user')

  localStorage.setItem('counter', '0')

  const incrementCounter = () => { // everytime this function is called, it will increment the counter value in localStorage by 1
    let counter = localStorage.getItem('counter')
    counter = parseInt(counter) + 1
    localStorage.setItem('counter', counter.toString())
    console.log(counter)
  } 

  incrementCounter() // Call the function to increment the counter
  incrementCounter() // Call the function to increment the counter

  localStorage.clear() // Clear localStorage after the operations

  return (
    <div>
      
    </div>
  )
}

export default App