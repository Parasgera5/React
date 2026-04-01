import React from 'react'
import NavBar from './NavBar'
import Page1Content from './Page1Content'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full'>
        <NavBar />
        <Page1Content users={props.users} />
    </div>
  )
}

export default Section1