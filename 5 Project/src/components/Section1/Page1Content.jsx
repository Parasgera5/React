import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='px-18 flex gap-10 items-center justify-between py-3 h-[90vh]'>
        <LeftContent />
        <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content