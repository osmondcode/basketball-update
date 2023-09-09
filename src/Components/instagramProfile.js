import React from 'react'

const InstagramProfile = ({darkMode}) => {
  return (
    <div className={darkMode ? 'w-full min-h-[16vh] flex items-center justify-center bg-gray-300 lg:px-[7%] px-[4%]' : 'w-full min-h-[16vh] flex items-center justify-center bg-[#111] lg:px-[7%] px-[4%]'}>
        <h1 className='font-bold sm:text-[1.8rem] text-[1.2rem]'>Check our Instagram <span className='text-red-600'>profile and follow us for burst of inspiration</span></h1>
    </div>
  )
}

export default InstagramProfile