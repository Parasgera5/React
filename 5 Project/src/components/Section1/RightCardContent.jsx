import React from 'react'

const RightCardContent = (props) => {
    console.log(props.color);
  return (
    
    <div className="absolute top-0 left-0 he-full w-full p-6 flex flex-col justify-between">
            <h2 className="bg-white rounded-full h-12 w-12 flex justify-center items-center text-2xl font-semibold">{props.id + 1}</h2>
            <div className='mt-70'>
                <p className='text-shadow-2xs text-white text-xl leading-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quod officia odio ipsa deserunt nobis.</p>
                <div className='flex justify-between text-white mb-10'>
                    <button style={{backgroundColor: props.color}} className='bg-blue-600 text-white font-medium px-8 py-3 rounded-full mt-5'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent