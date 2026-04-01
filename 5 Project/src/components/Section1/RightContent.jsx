import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full p-6 w-2/3 rounded-4xl overflow-x-auto flex flex-nowrap gap-10'>
        {/* <RightCard /> */}
        {props.users.map((elem, idx) => {
          return <RightCard key={idx} id={idx} img={elem.image} tag={elem.tag} color={elem.color} />
        })}
    </div>
  )
}

export default RightContent