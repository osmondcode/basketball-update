import React from 'react'
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full min-h-[30vh] lg:px-[7%] px-[4%] pt-[4vh] flex items-start justify-between flex-wrap gap-x-[20px] gap-y-[30px]'>
        <span className='w-[230px] flex flex-col items-start justify-start text-start'>
            <h1 className='text-[22px] font-bold mb-[5px] satisfy text-red-600'>Basketball</h1>
            <p className='text-[14px] text-[#555]'>Temporibus dolor voluptatibus iste adipisci consectetur hic sapiente rem ipsam laborum molestias, deleniti provident voluptatibus iste adipisci consectetur hic sapiente.</p>
        </span>


        <span className='w-[230px] flex flex-col items-start justify-start text-start'>
            <h2 className='uppercase mb-2 text-[15px] text-red-600 font-bold'>recent news</h2>
            <div className='mb-3'>
                <h4 className='text-[10px] font-semibold text-[#777]'>JULY 27, 2023</h4>
                <h2 className='text-[12px] font-bold'>CELTICS AGGRESSIVELY SHOPPING 3RD OVERALL PICK</h2>
            </div>
            <div>
                <h4 className='text-[10px] font-semibold text-[#777]'>MARCH 04, 2019</h4>
                <h2 className='text-[12px] font-bold'>GAME 5: 24 SECOND THOUGHTS BEFORE START</h2>
            </div>
        </span>
        <span className='w-[210px] flex flex-col items-start justify-start text-start'>
            <h2 className='uppercase mb-2 text-[15px] text-red-600 font-bold'>links</h2>
            <div className='w-full uppercase text-[14px] font-medium flex items-center justify-between'>
                <ul>
                    <li className='lists'>Home</li>
                    <li className='lists'>About us</li>
                    <li className='lists'>matches</li>
                    <li className='lists'>media</li>
                    <li className='lists'>player stats</li>
                </ul>
                <ul>
                    <li className='lists'>player</li>
                    <li className='lists'>shop</li>
                    <li className='lists'>news</li>
                    <li className='lists'>reviews</li>
                    <li className='lists'>shortcodes</li>
                </ul>
            </div>
        </span>
        <span className='w-[230px] flex flex-col items-start justify-start text-start'>
            <h2 className='uppercase mb-2 text-[15px] text-red-600 font-bold'>contact</h2>
            <p className='flex items-center text-[14px] my-1 justify-start gap-3 font-medium'>
                <p className='text-[14px] text-[#777]'>
                    <FaLocationArrow/>
                </p>
                USA, California 20, First Avenue, California
            </p>
            <p className='flex items-center text-[14px] my-1 justify-start gap-3 font-medium text-blue-800'>
                <p className='text-[14px] text-[#777]'>
                    <FaEnvelope/>
                </p>
                osmondcode@gmail.com
            </p>
            <p className='flex items-center text-[14px] my-1 justify-start gap-3 font-medium'>
                <p className='text-[14px] text-[#777]'>
                    <FaPhoneAlt/>
                </p>
                +234 (0) 903 3811 434
            </p>
        </span>
    </div>
  )
}

export default Footer