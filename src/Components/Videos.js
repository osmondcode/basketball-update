import React from 'react'
import { FaPlay } from 'react-icons/fa'

const Videos = ({VData}) => {
  return (
    <div className='w-full flex flex-wrap items-center justify-center'>
        {VData.map((video, i) => (
            <span key={i} className='2sm:w-[130px] w-[100px] h-[100px] 2sm:h-[130px] flex items-center justify-center  border-[1px] border-red-600 cursor-pointer relative overflow-hidden'>
                <img src={video.image} alt={video.number} className='object-cover w-full h-full'/>
                <div className='w-full h-full absolute top-0 left-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100'>
                    <button className='w-[40px] h-[40px] flex items-center justify-center bg-white/40 text-[18px] text-white rounded-full'>
                        <FaPlay/>
                    </button>
                </div>
            </span>
        ))}

    </div>
  )
}

export default Videos