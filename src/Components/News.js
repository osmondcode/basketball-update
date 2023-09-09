import React from 'react'
import { FaComment, FaTag } from 'react-icons/fa'
import cup from "../Images/6722708ce9f2626d385c1e02d6356b25.jpg";
import dancers from "../Images/ee135cd42d9edd40ad4057a50b369752.jpg";
import celtics from "../Images/d36619624d766973fbe77429d59323ae.jpg";

const News = ({darkMode}) => {
  return (
    <div className={darkMode ? 'w-full min-h-[60vh] lg:px-[7%] px-[4%] pt-[4vh] flex items-start justify-start flex-col bg-gray-300 pb-[5vh]' : 'w-full min-h-[60vh] lg:px-[7%] px-[4%] pt-[4vh] flex items-start justify-start flex-col bg-[#111] pb-[5vh]'}>
        <span className='flex 2sm:flex-row flex-col items-center 2sm:justify-start justify-center gap-[20px] 2sm:gap-[45px] mb-[30px]'>
            <h2 className='uppercase font-bold text-[24px]'>news</h2>
            <span className='flex items-center justify-center text-[13px] sm:text-[15px] uppercase font-bold gap-[15px] 2sm:gap-[30px]'>
                <button className='border-b-[3px] border-red-600 text-red-600 uppercase'>top stories</button>
                <button className='hover:text-red-600 duration-500 border-b-none hover:border-b-[3px] hover:border-b-red-600 uppercase'>highlights</button>
                <button className='hover:text-red-600 duration-500 border-b-none hover:border-b-[3px] hover:border-b-red-600 uppercase'>interviews</button>
            </span>
        </span>

        <span className='w-full flex items-center lg:justify-between justify-center flex-wrap gap-[30px]'>
            <div className='2sm:w-[320px] w-[290px] min-h-[280px] flex flex-col items-center justify-center bg-red-600/20 px-4 py-3 gap-[10px] cursor-pointer hover:scale-[1.03] duration-500'>
                <span className='w-full h-[130px] flex items-start justify-center bg-black/50 overflow-hidden'>
                    <img src={cup} alt='nba cup' className='w-full object-cover'/>
                </span>
                <span className='flex flex-col items-start justify-start text-start'>
                    <h4 className='text-[12px] font-semibold uppercase'>june 14, 2016</h4>
                    <h2 className='uppercase font-bold text-[14px] mb-1'>three questions nba finals preview</h2>
                    <p className='text-[12px]'>
                    Temporibus dolor voluptatibus iste adipisci consectetur hic sapiente rem ipsam laborum cumque provident.
                    </p>
                    <span className='flex items-center justify-start gap-4 mt-2'>
                        <p className='text-[12px] flex items-center justify-start gap-2 uppercase'>
                            <FaComment/>
                            14
                        </p>
                        <p className='text-[12px] flex items-center justify-start gap-2 uppercase'>
                            <FaTag/>
                            basketball
                        </p>
                    </span>    
                </span>
            </div>


            <div className='2sm:w-[320px] w-[290px] min-h-[280px] flex flex-col items-center justify-center bg-red-600/20 px-4 py-3 gap-[10px] cursor-pointer hover:scale-[1.03] duration-500'>
            <span className='w-full h-[130px] flex items-start justify-center bg-black/50 overflow-hidden'>
                <img src={dancers} alt='nba cup' className='w-full object-cover'/>
            </span>
                <span className='flex flex-col items-start justify-start text-start'>
                    <h4 className='text-[12px] font-semibold uppercase'>march 04, 2019</h4>
                    <h2 className='uppercase font-bold text-[14px] mb-1'>game 5: 24 second thoughts before start</h2>
                    <p className='text-[12px]'>
                    accusantium. Fuga saepe modi illum! Dicta veniam illo doloremque molestias, deleniti
                    </p>
                    <span className='flex items-center justify-start gap-4 mt-2'>
                        <p className='text-[12px] flex items-center justify-start gap-2 uppercase'>
                            <FaComment/>
                            32
                        </p>
                        <p className='text-[12px] flex items-center justify-start gap-2 uppercase'>
                            <FaTag/>
                            ball
                        </p>
                    </span>    
                </span>
            </div>


            <div className='2sm:w-[320px] w-[290px] min-h-[280px] flex flex-col items-center justify-center bg-red-600/20 px-4 py-3 gap-[10px] cursor-pointer hover:scale-[1.03] duration-500'>
            <span className='w-full h-[130px] flex items-start justify-center bg-black/50 overflow-hidden'>
                <img src={celtics} alt='nba cup' className='w-full object-cover'/>
            </span>
                <span className='flex flex-col items-start justify-start text-start'>
                    <h4 className='text-[12px] font-semibold uppercase'>july 27, 2023</h4>
                    <h2 className='uppercase font-bold text-[14px] mb-1'>celtics aggressively shopping 3rd overall pick</h2>
                    <p className='text-[12px]'>
                    perspiciatis est consequatur veniam? Fugit nobis nulla quasi laboriosam.
                    </p>
                    <span className='flex items-center justify-start gap-4 mt-2'>
                        <p className='text-[12px] flex items-center justify-start gap-2 uppercase'>
                            <FaComment/>
                            14
                        </p>
                        <p className='text-[12px] flex items-center justify-start gap-2 uppercase'>
                            <FaTag/>
                            coach
                        </p>
                    </span>    
                </span>
            </div>
        </span>
    </div>
  )
}

export default News