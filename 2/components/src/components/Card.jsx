import React from 'react'

const card = (props) => { // props ki jagah kuch bhi lik sakte hai -> ye object hota hai jo hum parent se receive kar rahe hai
  return (
    <h1 className='card'>Hello i am the card of {props.name}.</h1>
  )
}

// props(properties / parameters) hamesha uper se niche matlab parent se child ki taraf bhejte hai, kabhi bhi child se parent pe props nahi bhej sakte hum.
// matlab ki hum yaha pe App.jsx se hum Card.jsx mein props le rahe hai lekin vice versa nahi kar sakte hum.

export default card