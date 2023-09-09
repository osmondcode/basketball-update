import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const NextMatches = ({darkMode, Mdate}) => {

    const [slider, setSlider] = useState(1)

    const sliderHandleNext = () =>{
        if (slider !== Mdate.length) {
            setSlider(slider + 1)
        } else if (slider === Mdate.length){
            setSlider(1)
        }
    }

    const sliderHandlePrev = () => {
        if (slider !== 1) {
            setSlider(slider - 1)
        } else if (slider === 1) {
            setSlider(Mdate.length)
        }
    }
  return (
    <div className={darkMode ? 'w-full min-h-[60vh] flex lg:flex-row flex-col items-center md:justify-between justify-center lg:px-[7%] gap-[20px] px-[4%] lg:pt-0 py-[10vh] mb-[4vh]' : 'w-full min-h-[60vh] flex lg:flex-row flex-col items-center md:justify-between justify-center lg:px-[7%] gap-[20px] px-[4%] lg:pt-0 py-[10vh] bg-[#111] mb-[4vh]'}>

        {Mdate.map((match, i) => (

            i === slider - 1 &&
            <span key={match.id} className='lg:w-[550px] md:w-[550px] w-full flex flex-col items-start justify-center mb-[10vh] lg:mb-0 '>
                <div className='flex items-center justify-start gap-4 mb-4'>
                    <h2 className='text-[22px] font-bold uppercase'>next matches</h2>
                    <span className='flex items-center justify-center gap-2'>
                        <button onClick={sliderHandlePrev}><FaAngleLeft/></button>
                        <span className='flex items-center justify-center gap-1'>
                            <p className='font-semibold'>{match.number}</p>
                            <p>/</p>
                            <p>3</p>
                        </span>
                        <button onClick={sliderHandleNext}><FaAngleRight/></button>
                    </span>
                </div>

                <div className='w-full flex flex-col text-white next-match-bg'>
                    <span className='w-full h-[6vh] bg-red-600 flex items-center justify-center gap-4 font-medium text-[12px] 2sm:text-[16px]'>
                        <p>249 days</p>
                        <p>-</p>
                        <p>92 hours</p>
                        <p>-</p>
                        <p>57 minutes</p>
                    </span>
                    <span className='bg-black/60 w-full min-h-[30vh] py-6 sm:py-0 flex flex-col items-center justify-center'>
                        <div className='w-full mb-7 flex sm:flex-row flex-col items-center justify-center gap-[15px]'>
                            <div className='flex items-center justify-between gap-[15px]'>
                                <span className='2sm:w-[50px] w-[40px] uppercase 2sm:h-[50px] h-[40px] flex items-center justify-center bg-red-600'>img</span>
                                <h2 className='uppercase 2sm:text-[18px] text-[16px] font-bold w-[160px]'>{match.team1}</h2>
                            </div>

                            <span className='w-[45px] h-[45px] flex items-center justify-center rounded-full bg-red-600'>
                                <h1 className='text-[20px] font-black'>VS</h1>
                            </span>

                            <div className='flex items-center justify-between gap-[15px]'>
                                <h2 className='uppercase 2sm:text-[18px] text-[16px] font-bold w-[160px]'>{match.team2}</h2>
                                <span className='2sm:w-[50px] w-[40px] uppercase 2sm:h-[50px] h-[40px] flex items-center justify-center bg-red-600'>img</span>
                            </div>
                        </div>
                        <div>
                            <h4 className='uppercase text-[12px] 2sm:text-[15px] font-bold'>{match.timing}</h4>
                            <p className='text-[13px] mt-3 font-medium uppercase'>{match.venue}</p>
                        </div>
                    </span>
                </div>
            </span>

        ))}


        <span className='lg:w-[450px] md:w-[550px] w-full flex flex-col items-start justify-center'>
            <h2 className='text-[22px] mb-4 font-bold uppercase'>latest results</h2>
            <div className='w-full h-[36vh]  flex flex-col items-center justify-start rounded-md  text-black'>
                <span className='w-full h-[30px] flex items-center justify-between bg-gray-400 px-3'>
                    <p className='uppercase font-semibold text-gray-800 text-[13px] 2sm:text-[14px]'>friday 17 april</p>
                    <p className='uppercase font-semibold text-gray-800 text-[13px] 2sm:text-[14px]'>minnesota</p>
                </span>

                <span className='w-full min-h-[40px] flex items-center justify-between bg-gray-300 font-semibold text-[13px] capitalize 2sm:text-[14px] px-3'>
                    <p className='w-[35%] flex items-start justify-start'>orlando magic</p>
                    <p>108 / 119</p>
                    <p className='w-[35%] flex items-end 2sm:justify-between justify-end'> <span className='uppercase hidden 2sm:flex text-[10px] text-white rounded-md mr-2 px-2 py-1 bg-red-600'>won</span> miami heat</p>
                </span>

                <span className='w-full min-h-[40px] flex items-center justify-between bg-gray-300 font-semibold text-[13px] capitalize 2sm:text-[14px] px-3'>
                    <p className='w-[35%] flex items-start justify-between'>la clippers <span className='uppercase hidden 2sm:flex text-[10px] text-white rounded-md mr-2 px-2 py-1 bg-red-600'>won</span></p>
                    <p>129 / 121</p>
                    <p className='w-[35%] flex items-end 2sm:justify-end justify-end'>  boston celtics</p>
                </span>


                <span className='w-full h-[30px] flex items-center justify-between bg-gray-400 px-3'>
                    <p className='uppercase font-semibold text-gray-800 text-[13px] 2sm:text-[14px]'>monday 15 april</p>
                    <p className='uppercase font-semibold text-gray-800 text-[13px] 2sm:text-[14px]'>new york</p>
                </span>


                <span className='w-full min-h-[40px] flex items-center justify-between bg-gray-300 font-semibold text-[13px] capitalize 2sm:text-[14px] px-3'>
                    <p className='w-[35%] flex items-start justify-between'>phoenix suns <span className='uppercase hidden 2sm:flex text-[10px] text-white rounded-md mr-2 px-2 py-1 bg-red-600'>won</span></p>
                    <p>135 / 108</p>
                    <p className='w-[35%] flex items-end justify-end'> knicks</p>
                </span>

                <span className='w-full h-[31px] flex items-center justify-between bg-gray-400 px-3'>
                    <p className='uppercase font-semibold text-gray-800 text-[13px] 2sm:text-[14px]'>sunday 14 april</p>
                    <p className='uppercase font-semibold text-gray-800 text-[13px] 2sm:text-[14px]'>new york</p>
                </span>
                

                <span className='w-full min-h-[40px] flex items-center justify-between bg-gray-300 font-semibold text-[13px] capitalize 2sm:text-[14px] px-3'>
                    <p className='w-[35%] flex items-start justify-start'>lakers</p>
                    <p>112 / 123</p>
                    <p className='w-[35%] flex items-end 2sm:justify-between justify-end'> <span className='uppercase hidden 2sm:flex text-[10px] text-white rounded-md mr-2 px-2 py-1 bg-red-600'>won</span>warriors</p>
                </span>
            </div>
        </span>
    </div>
  )
}

export default NextMatches