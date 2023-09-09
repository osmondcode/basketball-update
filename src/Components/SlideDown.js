import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SlideDown = ({slider}) => {
  return (
    <div className='w-full h-fit absolute top-[13vh] left-0 bg-red-600 duration-500 text-white font-thin satisfy flex md:hidden'>


        <ul className={slider ? 'w-full h-[40vh] overflow-hidden flex  flex-col items-start justify-start  capitalize gap-[1.5px]' : 'w-full h-[20vh] overflow-hidden flex flex-col items-start justify-start   capitalize gap-[1.5px]'}>
                <li className='w-full border-b-[1.5px] border-b-[#e9e8e8] py-1 flex items-center justify-start px-[15px]'>
                    <a href='#home'>
                        about us
                    </a>
                </li>

                <li className='w-full border-b-[1.5px] border-b-[#e9e8e8] py-1 flex items-center justify-start px-[15px]'>
                    <a href='#home'>
                        matches
                    </a>
                </li>

                <li className='w-full border-b-[1.5px] border-b-[#e9e8e8] py-1 flex items-center justify-start px-[15px]'>
                    <a href='#home'>
                        news
                    </a>
                </li>

                <li className='w-full border-b-[1.5px] border-b-[#e9e8e8] py-1 flex items-center justify-start px-[15px]'>
                    <a href='#home'>
                        pages
                    </a>
                </li>

                <li className='w-full border-b-[1.5px] border-b-[#e9e8e8] py-1 flex items-center justify-start px-[15px]'>
                    <a href='#home'>
                        shop
                    </a>
                </li>
                
                <li className='w-full border-b-[1.5px] border-b-[#e9e8e8] py-1 flex items-center justify-start px-[15px]'>
                    <a href='#home'>
                        contact us
                    </a>
                </li>

                <li className='w-full py-1 flex items-center justify-start px-[15px] gap-[15px]'>
                    Search
                    <FaSearch/>
                </li>
        </ul>
    </div>
  )
}

export default SlideDown