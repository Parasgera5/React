import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    
  return (
    <div id='right' className='h-full shrink-0 w-80 bg-red-500 overflow-hidden relative rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <RightCardContent id={props.id} tag={props.tag} color={props.color} />
    </div>
  )
}

export default RightCard