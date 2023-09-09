import React, { useEffect, useState } from 'react'
import { FaBasketballBall } from 'react-icons/fa'

const Preloader = () => {

    const [timeOut, setTimeOut] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setTimeOut(false)
        }, 4000);
    },)
  return (
    <div className={timeOut ? 'w-full h-screen overflow-hidden fixed top-0 left-0 bg-black flex flex-col text-white items-center justify-center z-[100]' : 'w-full h-0 duration-1000 overflow-hidden fixed top-0 left-0 bg-black flex flex-col text-white items-center justify-center z-[100]'}>
        <span className='flex flex-col items-center justify-center absolute top-[42vh] left-auto right-auto'>
            <span className='text-[2.2rem] text-orange-600 bounce'>
                <FaBasketballBall/>
            </span>
            <span className='mt-[20px]'>
                <h1 className='text-[25px] font-semibold uppercase satisfy'>
                    Basketball
                </h1>
            </span>
        </span>

    </div>
  )
}

export default Preloader