import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const increase = () => {
    setNum(num + 1) // setNum is asynchronous, so it will not update the value of num immediately ui mein update ho jayega lekin console mein updated value agle click pe show hogi matlab jab value badi toh x + 1 ui pe ho jayegi lekin console pe x print hogi -> although value change ho gayi hai, ab agle click pe value ((x+1)+1) ho chuki hodi lekin console pe x+1 print hoga, yahi same cycle chanlta rahega -> ye asynchronous behaviour ki wajah se hota hai. It will update it after the function is executed. So, if we want to see the updated value of num, we can use the useEffect hook to log the value of num after it is updated.
    console.log(num) 
  }
  
  const [obj, setObj] = useState({name: "hello", age: 20});

  const changeObject = () => {
    // const newObj = {...obj}
    // newObj.name = "world"
    // newObj.age = 30
    // setObj(newObj)

    setObj(prev => ({...prev, name: "world", age: 30})) // this is the recommended way to update state when the new state depends on the previous state. It ensures that we are working with the most up-to-date state value, even if there are multiple state updates queued up. By using the functional form of setState, we can avoid potential issues with stale state values and ensure that our updates are applied correctly.

  }

  const [array, setArray] = useState([0, 1, 2, 3, 4])
  
  const changeArray = () => {
    // const newArray = [...array]
    // newArray.push(5)
    // setArray(newArray)

    // setArray([...array, 5])

    // setArray(30); // array ki jagah number set kar diya toh array ki jagah number show hoga, kyunki useState mein hum kisi bhi type ka data store kar sakte hain, toh ab array ki jagah number store ho jayega aur ui pe bhi number show hoga. Ye isliye possible hai kyunki useState is a generic hook that can be used to store any type of data, whether it's a primitive value like a number or a string, or a complex data structure like an object or an array. So, when we call setArray(30), we are updating the state variable 'array' to hold the value 30 instead of the previous array. As a result, the UI will reflect this change and display 30 instead of the array values.

    setArray(prev => [...prev, 5]) // this is the recommended way to update state when the new state depends on the previous state. It ensures that we are working with the most up-to-date state value, even if there are multiple state updates queued up. By using the functional form of setState, we can avoid potential issues with stale state values and ensure that our updates are applied correctly.

  }


  const [value, setValue] = useState(0)
  
  const changeValue = () => {
    // below three lines -> change kar rahe hai teen baar ho raha hai only ek baar kyunki setValue is asynchronous, so it will not update the value of value immediately. It will update it after the function is executed. So, if we want to see the updated value of value, we can use the useEffect hook to log the value of value after it is updated.
    // setValue(value+1);
    // setValue(value+1);
    // setValue(value+1);


    // below is the batch update technique, which is used to update the state multiple times in a single render. It is used to avoid the issue of stale state values when we have multiple state updates queued up. By using the functional form of setState, we can ensure that we are working with the most up-to-date state value, even if there are multiple state updates queued up. So, when we call setValue(prev => prev + 1) three times in a row, it will correctly update the value by adding 1 to the previous value each time, resulting in a total increase of 3.
    setValue(prev => (prev + 1)) // this is the recommended way to update state when the new state depends on the previous state. It ensures that we are working with the most up-to-date state value, even if there are multiple state updates queued up. By using the functional form of setState, we can avoid potential issues with stale state values and ensure that our updates are applied correctly. So, when we call setValue(prev => prev + 1) three times in a row, it will correctly update the value by adding 1 to the previous value each time, resulting in a total increase of 3.
    setValue(prev => (prev + 1))
    setValue(prev => (prev + 1))
    
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>increase</button>

      <h1>below is listed the object values.</h1>
      <h1>{obj.name} is {obj.age} years old.</h1>
      <button onClick={changeObject}>click to change the object values</button>


      <h1>below is listed the array values.</h1>
      <h1>{array}</h1>
      <button onClick={changeArray}>click to change the array values</button>
      

      <div>
        <h1>below is listed the value.</h1>
        <h1>{value}</h1>
        <button onClick={changeValue}>click here</button>
      </div>


      
    </div>
  )
}

export default App