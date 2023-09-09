import React from 'react'
import { FaCamera, FaVideo, FaVolumeUp } from 'react-icons/fa'
import media1 from "../Images/53ec3dbe6d25895c1365162b5ad595c8.jpg";
import media2 from "../Images/230d118513adb86d5d54706e57e8f2d0.jpg";
import media3 from "../Images/a7b950a8c004b9395f8a2a1724bf099b.jpg";
import media4 from "../Images/e7c312b9e1d1f116dfe6c7151697de94.jpg";
import media5 from "../Images/d1f20799faea6e1fd8decce101b8f51b.jpg";
import media6 from "../Images/46733f586cd00fc8f2decb047c2deaa6.jpg";

const Media = () => {
  return (
    <div className='w-full min-h-[60vh] flex flex-col items-start justify-start lg:px-[7%] px-[4%] pt-[8vh] lg:pt-0'>
        <span className='flex items-center justify-between gap-[20px] 2sm:gap-[45px]'>
            <h1 className='uppercase font-bold text-[24px]'>Media</h1>
            <div className='flex items-center justify-center text-[13px] 2sm:text-[15px] uppercase font-bold gap-[15px] 2sm:gap-[30px]'>
                <button className='border-b-[3px] border-red-600 text-red-600'>All</button>
                <button className='hover:text-red-600 duration-500 border-b-none hover:border-b-[3px] hover:border-b-red-600'>Images</button>
                <button className='hover:text-red-600 duration-500 border-b-none hover:border-b-[3px] hover:border-b-red-600'>Audios</button>
                <button className='hover:text-red-600 duration-500 border-b-none hover:border-b-[3px] hover:border-b-red-600'>Videos</button>
            </div>
        </span>


        <span className='w-full flex items-start gap-x-[20px] gap-y-[30px] lg:justify-between justify-center my-[5vh] flex-wrap'>
            <div className='w-fit flex items-start justify-around flex-wrap gap-[20px]'>

                <span className='w-fit flex flex-col items-center justify-center gap-[20px]'>
                    <span className='xl:w-[250px] lg:w-[200px] sm:w-[230px] w-[200px] h-[200px] bg-red-600/40 flex items-center justify-center relative cursor-pointer overflow-hidden'>
                        <img src={media1} alt='media1' className='w-full h-full object-cover'/>
                        <span className='w-[30px] h-[30px] text-white bg-red-600 absolute top-[20px] left-[20px] flex items-center justify-center'>
                            <FaCamera/>
                        </span>
                        <span className='uppercase w-full py-1 text-white font-semibold bg-black/50 flex items-center justify-center text-start absolute bottom-0 left-0 px-[15px] text-[14px] 2sm:text-[16px]'>
                            <p>cavaliers stave off <br/> elimination in n.b.a finals</p>
                        </span>
                    </span>
                    <span className='xl:w-[250px] lg:w-[200px] sm:w-[230px] w-[200px] h-[200px] bg-red-600/40 flex items-center justify-center relative overflow-hidden cursor-pointer'>
                        <img src={media4} alt='media1' className='w-full h-full object-cover'/>
                        <span className='w-[30px] h-[30px] text-white bg-red-600 absolute top-[20px] left-[20px] flex items-center justify-center'>
                                <FaVideo/>
                            </span>
                        <span className='uppercase w-full py-1 text-white font-semibold bg-black/50 flex items-center justify-center text-start absolute bottom-0 left-0 px-[15px] text-[14px] 2sm:text-[16px]'>
                            <p>golden state railers <br/> around draymond green, <br/> the mad warrior</p>
                        </span>
                    </span>
                </span>


                <span className='xl:w-[250px] lg:w-[200px] sm:w-[230px] w-[200px] h-[420px] bg-red-600/40 flex items-center justify-center relative overflow-hidden cursor-pointer'>
                    <img src={media3} alt='media1' className='w-full h-full object-cover'/>
                    <span className='w-[30px] h-[30px] text-white bg-red-600 absolute top-[20px] left-[20px] flex items-center justify-center'>
                                <FaVolumeUp/>
                            </span>
                        <span className='uppercase w-full py-1 text-white font-semibold bg-black/50 flex items-center justify-center text-start absolute bottom-0 left-0 px-[15px] text-[14px] 2sm:text-[16px]'>
                            <p>after devouring league, <br/> warriors remain hungry</p>
                        </span>
                </span>
            </div>


            <div className='w-fit flex flex-col items-center justify-around gap-[20px]'>
                <span className='xl:w-[520px] lg:w-[420px] sm:w-[480px] 2sm:w-[420px] w-full h-[200px] flex items-center justify-center bg-red-600/40 relative overflow-hidden cursor-pointer'>
                    <img src={media2} alt='media1' className='w-full h-full object-cover'/>
                    <span className='w-[30px] h-[30px] text-white bg-red-600 absolute top-[20px] left-[20px] flex items-center justify-center'>
                                <FaVideo/>
                            </span>
                        <span className='uppercase w-full py-1 text-white font-semibold bg-black/50 flex items-start px-5 justify-start text-start absolute bottom-0 left-0 text-[14px] 2sm:text-[16px]'>
                            <p>expelled baskettball player sues yale</p>
                        </span>
                </span>
                <span className='w-fit flex items-center justify-center flex-wrap gap-[20px]'>
                    <span className='xl:w-[250px] lg:w-[200px] sm:w-[230px] w-[200px] h-[200px] bg-red-600/40 flex items-center justify-center relative overflow-hidden cursor-pointer'>
                        <img src={media6} alt='media1' className='w-full h-full object-cover'/>
                        <span className='w-[30px] h-[30px] text-white bg-red-600 absolute top-[20px] left-[20px] flex items-center justify-center'>
                                <FaVolumeUp/>
                            </span>
                        <span className='uppercase w-full py-1 text-white font-semibold bg-black/50 flex items-center justify-center text-start absolute bottom-0 left-0 px-[15px] text-[14px] 2sm:text-[16px]'>
                            <p>state of the art: <br/> warriors, tech's team, are <br/> soaring out of reach</p>
                        </span>
                    </span>
                    <span className='xl:w-[250px] lg:w-[200px] sm:w-[230px] w-[200px] h-[200px] bg-red-600/40 flex items-center justify-center relative overflow-hidden cursor-pointer'>
                        <img src={media5} alt='media1' className='w-full h-full object-cover'/>
                        <span className='w-[30px] h-[30px] text-white bg-red-600 absolute top-[20px] left-[20px] flex items-center justify-center'>
                                <FaCamera/>
                            </span>
                        <span className='uppercase w-full py-1 text-white font-semibold bg-black/50 flex items-center justify-center text-start absolute bottom-0 left-0 px-[15px] text-[14px] 2sm:text-[16px]'>
                            <p>lebron james destroys  ring stand</p>
                        </span>
                    </span>
                </span>
            </div>
        </span>
    </div>
  )
}

export default Media