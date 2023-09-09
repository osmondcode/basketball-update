import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight, FaQuoteLeft } from 'react-icons/fa'

const Review = ({darkMode, RData}) => {

    const [slider, setSlider] = useState(1)

    const dataHandleNext = () => {
        if (slider !== RData.length) {
            setSlider(slider + 1)
        } else if (slider === RData.length) {
            setSlider(1)
        }
    }
    
    const dataHandlePrev = () => {
        if (slider !== 1) {
            setSlider(slider - 1)
        } else if(slider === 1){
            setSlider(RData.length)
        }
    }

    console.log(slider);
    
  return (
    <div className='w-full min-h-[60vh] lg:px-[7%] px-[4%] pt-[4vh] '>
        <span className='w-full flex items-baseline justify-start gap-[30px]'>
            <h2 className='uppercase font-bold text-[24px]'>reviews</h2>
            <span className='flex items-center justify-center text-[13px] sm:text-[15px] uppercase font-bold gap-[15px] 2sm:gap-[20px]'>
                <button className='text-[18px] text-red-600' onClick={dataHandlePrev}>
                    <FaAngleLeft/>
                </button>

                <span className={slider === 1 ? 'w-[10px] h-[10px] rounded-full bg-red-600' : 'w-[10px] h-[10px] rounded-full bg-gray-600'}></span>
                <span className={slider !== 1 ? 'w-[10px] h-[10px] rounded-full bg-red-600' : 'w-[10px] h-[10px] rounded-full bg-gray-600'}></span>

                <button className='text-[18px] text-red-600' onClick={dataHandleNext}>
                    <FaAngleRight/>
                </button>
            </span>
        </span>

        {RData.map((person, i) => (

            i === slider - 1 &&
                <span key={person.id} className='w-full min-h-[40vh] mt-[8vh] gap-[30px] flex md:flex-row flex-col items-center justify-center'>
                <div className='sm:w-[400px] w-full flex items-center justify-center relative'>
                    <span className={darkMode ? 'w-[220px] h-[290px] bg-slate-300' : 'w-[220px] h-[290px] bg-[#111]'}>
                    </span>
                        <span className='absolute flex flex-col items-center justify-start'>
                            <p className={darkMode ? 'mb-[10px] text-[40px] text-slate-800' : 'mb-[10px] text-[40px] text-red-600/70'}><FaQuoteLeft/></p>
                            <h2 className='uppercase font-bold text-[16px] text-red-600 mb-2'>{person.name}</h2>
                            <p className='2sm:text-[15px] text-[13px] mb-2'>
                                {person.quote}
                            </p>
                            <hr className='w-[150px] h-[3px] mt-2 bg-red-600'/>
                        </span>
                </div>


                <div className='sm:w-[500px] w-full h-[65vh] flex items-center justify-center  '>
                    <img src={person.image} alt='person' className='h-full'/>
                </div>
            </span>
        ))}
    </div>
  )
}

export default Review