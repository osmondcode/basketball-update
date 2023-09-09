import React from 'react'
import { FaBars, FaBasketballBall, FaSearch, FaTimes } from 'react-icons/fa'


const Header = ({slider, sliderHandle}) => {
  return (
    <header className='w-full h-[8vh]   top-[5vh] left-0 flex items-center justify-between lg:px-[7%] px-[4%] absolute'>
        <span className='flex items-center gap-2 cursor-pointer'>
            <span className='text-[28px] text-red-600'>
                <FaBasketballBall/>
            </span>
            <h1 className='text-[25px] font-semibold uppercase satisfy'>
                Basketball
            </h1>
        </span>
        

        <nav className='flex items-center justify-center h-full py-2'>
            <button className='flex md:hidden w-[30px] h-[30px] items-center justify-center text-[22px]' onClick={sliderHandle}>
                {slider ? <FaTimes/> : <FaBars/>}
            </button>
            <ul className='md:flex hidden items-center justify-between gap-6 capitalize text-[17px] w-full h-full bg-black/60 text-white px-4'>

                <li>
                    <a href='#home'>
                        about us
                    </a>
                </li>

                <li>
                    <a href='#home'>
                        matches
                    </a>
                </li>

                <li>
                    <a href='#home'>
                        news
                    </a>
                </li>

                <li>
                    <a href='#home'>
                        pages
                    </a>
                </li>

                <li>
                    <a href='#home'>
                        shop
                    </a>
                </li>
                
                <li>
                    <a href='#home'>
                        contact us
                    </a>
                </li>

                <li className='flex items-center justify-between gap-3'>
                    <FaSearch/>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header