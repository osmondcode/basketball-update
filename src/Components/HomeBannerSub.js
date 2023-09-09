import React from 'react'

const HomeBannerSub = () => {
  return (
    <div className='w-full min-h-[8vh] bg-red-600 text-white flex  items-center justify-between absolute left-0 bottom-0 lg:px-[7%] px-[4%]'>
        <h3 className='font-semibold text-[14px] sm:text-[16px] text-start'>Join us to get instant updates of your premier</h3>
        <button className='uppercase font-semibold text-[10px] 2sm:text-[13px] rounded-md sm:px-[24px] px-[12px] 2sm:py-[6px] py-[3px] border-[2px] border-white hover:bg-[#dedede] hover:border-[#dedede] hover:text-red-600 duration-500'>join now!</button>
    </div>
  )
}

export default HomeBannerSub