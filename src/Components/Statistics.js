import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight, } from 'react-icons/fa'

const Statistics = ({PStat}) => {

    const [slider, setSlider] = useState(1)

    const slideHandlerNext = () => {
        if (slider !== PStat.length) {
            setSlider(slider +1)
        } else if (slider === PStat.length){
            setSlider(1)
        }
    }

    const slideHandlerPrev = () => {
        if (slider !== 1) {
            setSlider(slider - 1)
        } else if (slider === 1){
            setSlider(PStat.length)
        }
    }
  return (
    <div className='w-full min-h-[60vh] flex lg:flex-row flex-col gap-y[30px] lg:items-start items-center justify-between bg-black/20 lg:px-[7%] px-[4%] pt-[2vh]'>
        {PStat.map((player, i) => (
            i === slider - 1 &&
                <div key={player.id} className='lg:w-[60%] md:w-[80%] w-full py-5 flex flex-col sm:items-start items-center justify-center'>
                    <h1 className='uppercase text-[25px] mb-[15px] font-bold'>player Statistics</h1>
                    <span className='w-full flex sm:flex-row flex-col items-center sm:justify-start justify-center gap-5 uppercase font-bold mb-[20px] '>
                        <h2 className='text-[18px] mr-[10px]'>preseason stats</h2>

                        <span className='flex items-center justify-start gap-3 2sm:gap-5 uppercase font-bold'>
                            <button className='uppercase border-b-[3px] border-red-600 text-red-600 text-[14px]'>points</button>
                            <button className='uppercase hover:text-red-600 duration-500 border-b-none hover:border-b-[3px] hover:border-b-red-600 text-[14px]'>rebounds</button>
                            <button className='uppercase hover:text-red-600 duration-500 border-b-none hover:border-b-[3px] hover:border-b-red-600 text-[14px]'>blocks</button>
                            <button className='uppercase hover:text-red-600 duration-500 border-b-none hover:border-b-[3px] hover:border-b-red-600 text-[14px]'>efficiency</button>
                        </span>
                    </span>

                    <span className='md:w-[90%] w-full min-h-[40vh] flex sm:flex-row flex-col sm:py-0 py-7 items-center justify-center cursor-pointer gap-6 bg-white text-black'>
                        <span className='w-[80%] sm:w-[45%] h-[40vh] flex items-center justify-center'>
                            <img src={player.image} alt='Player not available' className='h-full '/>
                        </span>
                        <span className='sm:w-[45%] w-[80%] flex flex-col items-start justify-start'>
                            <h1 className='text-[2.5rem] text-red-600 font-bold'>{player.points}</h1>
                            <span className='flex items-center justify-center gap-6 mb-2'>
                                <button className='text-[18px] text-red-600' onClick={slideHandlerPrev}><FaAngleLeft/></button>
                                <button className='text-[18px] text-red-600' onClick={slideHandlerNext}><FaAngleRight/></button>
                            </span>
                            <h2 className='font-semibold text-[20px] uppercase'>{player.firstname} </h2>
                            <h2 className='font-semibold text-[20px] uppercase mb-[10px]'>{player.surname}</h2>
                            <h4 className='uppercase text-[12px] mb-3 font-medium'>{player.position}</h4>
                            <button className='px-[14px] py-[7px] text-[14px] bg-red-600 text-white'>veiw profile</button>
                        </span>
                    </span>
                </div>
        ))}


        <div className='2sm:w-fit w-full py-5 flex flex-col items-start justify-between'>
            <span className='w-full flex items-center justify-between mb-[15px]'>
                <h1 className='uppercase text-[23px] font-bold'>points table</h1>
                <p className='text-[12px] font-extralight underline uppercase'>view all</p>
            </span>

            <span className='lg:w-[330px] 2sm:w-[400px] w-full h-[330px] bg-green-200 flex flex-col items-start justify-start cursor-pointer'>
                <span className='px-3 w-full h-[41.25px] bg-red-600 text-white flex items-center justify-between font-semibold 2sm:text-[16px] text-[13px]'>
                    <span className='flex items-center justify-center gap-3 uppercase'>
                        <p>N.</p>
                        <p>team</p>
                    </span>
                    <span className='flex items-center justify-center gap-3 uppercase'>
                        <p>w</p>
                        <p>l</p>
                        <p>pts</p>
                        <p>%</p>
                    </span>
                </span>
                <span className='px-3 w-full h-[41.25px] bg-slate-200 text-black flex items-center justify-between 2sm:text-[16px] text-[13px]'>
                    <span className='flex items-center justify-center gap-3 uppercase'>
                        <p>1</p>
                        <span className='w-[30px] h-[30px] flex items-center justify-center overflow-hidden bg-red-700/20 text-[8px]'>img</span>
                        <p className='capitalize text-start truncate w-[100px] 2sm:w-[140px] font-medium'>golden state warriors</p>
                    </span>
                    <span className='flex items-center justify-center gap-3 uppercase'>
                        <p>16</p>
                        <p>3</p>
                        <p>32</p>
                        <p>91</p>
                    </span>
                </span>
                <span className='px-3 w-full h-[41.25px] bg-slate-100 text-black flex items-center justify-between 2sm:text-[16px] text-[13px]'>
                    <span className='flex items-center justify-center gap-3 uppercase'>
                        <p>2</p>
                        <span className='w-[30px] h-[30px] flex items-center justify-center overflow-hidden bg-red-700/20 text-[8px]'>img</span>
                        <p className='capitalize text-start truncate w-[140px] font-medium'>LA clippers</p>
                    </span>
                    <span className='flex items-center justify-center gap-3 uppercase'>
                        <p>15</p>
                        <p>4</p>
                        <p>30</p>
                        <p>88</p>
                    </span>
                </span>
                <span className='px-3 w-full h-[41.25px] bg-slate-200 text-black flex items-center justify-between 2sm:text-[16px] text-[13px]'>
                    <span className='flex items-center justify-center gap-3 uppercase'>
                        <p>3</p>
                        <span className='w-[30px] h-[30px] flex items-center justify-center overflow-hidden bg-red-700/20 text-[8px]'>img</span>
                        <p className='capitalize text-start truncate w-[100px] 2sm:w-[140px] font-medium'>memphis grizzlies</p>
                    </span>
                    <span className='flex items-center justify-center gap-3 uppercase'>
                        <p>13</p>
                        <p>6</p>
                        <p>26</p>
                        <p>80</p>
                    </span>
                </span>
                <span className='px-3 w-full h-[41.25px] bg-slate-100 text-black flex items-center justify-between 2sm:text-[16px] text-[13px]'>
                    <span className='flex items-center justify-center gap-3 uppercase'>
                        <p>4</p>
                        <span className='w-[30px] h-[30px] flex items-center justify-center overflow-hidden bg-red-700/20 text-[8px]'>img</span>
                        <p className='capitalize text-start truncate w-[100px] 2sm:w-[140px]  font-medium'>new orleans pelicans</p>
                    </span>
                    <span className='flex items-center justify-center gap-3 uppercase'>
                        <p>11</p>
                        <p>8</p>
                        <p>22</p>
                        <p>77</p>
                    </span>
                </span>
                <span className='px-3 w-full h-[41.25px] bg-slate-200 text-black flex items-center justify-between 2sm:text-[16px] text-[13px]'>
                <span className='flex items-center justify-center gap-3 uppercase'>
                        <p>5</p>
                        <span className='w-[30px] h-[30px] flex items-center justify-center overflow-hidden bg-red-700/20 text-[8px]'>img</span>
                        <p className='capitalize text-start truncate w-[100px] 2sm:w-[140px] font-medium'>san antonio spurs</p>
                    </span>
                    <span className='flex items-center justify-center gap-3 uppercase'>
                        <p>10</p>
                        <p>9</p>
                        <p>20</p>
                        <p>72</p>
                    </span>
                </span>
                <span className='px-3 w-full h-[41.25px] bg-slate-100 text-black flex items-center justify-between 2sm:text-[16px] text-[13px]'>
                    <span className='flex items-center justify-center gap-3 uppercase'>
                        <p>6</p>
                        <span className='w-[30px] h-[30px] flex items-center justify-center overflow-hidden bg-red-700/20 text-[8px]'>img</span>
                        <p className='capitalize text-start font-medium'>atlanta hawks</p>
                    </span>
                    <span className='flex items-center justify-center gap-3 uppercase'>
                        <p>8</p>
                        <p>11</p>
                        <p>18</p>
                        <p>68</p>
                    </span>
                </span>
                <span className='px-3 w-full h-[41.25px] bg-slate-200 text-black flex items-center justify-between 2sm:text-[16px] text-[13px]'>
                    <span className='flex items-center justify-center gap-3 uppercase'>
                        <p>7</p>
                        <span className='w-[30px] h-[30px] flex items-center justify-center overflow-hidden bg-red-700/20 text-[8px]'>img</span>
                        <p className='capitalize text-start font-medium'>miami heat</p>
                    </span>
                    <span className='flex items-center justify-center gap-3 uppercase'>
                        <p>7</p>
                        <p>12</p>
                        <p>16</p>
                        <p>63</p>
                    </span>
                </span>
            </span>
        </div>
    </div>
  )
}

export default Statistics