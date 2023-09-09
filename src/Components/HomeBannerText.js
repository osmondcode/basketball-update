import React from 'react'

const HomeBannerText = ({darkMode}) => {
  return (
    <div className='md:w-1/2 w-full h-full flex items-start flex-col mt-[30vh]'>
        <h3 className='uppercase 2sm:text-[19px] text-[17px] font-semibold'>jun 12, 2023 01:30 am gmt</h3>
        <h1 className='2sm:text-[2.2rem] text-[1.8rem] font-bold text-start leading-[50px] text-red-600'>The Nuggets wins <br/> the NBA finals 94-88</h1>
        <p className='capitalize 2sm:text-[22px] text-[19px] font-light mb-6'>big impression</p>
        <button className='2sm:px-[20px] px-[14px] 2sm:py-[8px] py-[6px] uppercase rounded-md text-[14px] font-semibold border-[2px] border-[#e9e8e8] hover:bg-red-600 hover:text-white hover:border-red-600 duration-500'>read more</button>
    </div>
  )
}

export default HomeBannerText