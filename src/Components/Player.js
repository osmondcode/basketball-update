import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Player = ({PData, darkMode}) => {

    const [slider, setSlider] = useState(1)

    const sliderHandleNext = () => {
        if (slider !== PData.length) {
            setSlider(slider + 1)
        } else if (slider === PData.length){
            setSlider(1)
        }
    }

    const sliderHandlePrev = () => {
        if (slider !== 1) {
            setSlider(slider - 1)
        } else if (slider === 1){
            setSlider(PData.length)
        }
    }

    
  return (
    <div className='w-full min-h-[60vh] lg:px-[7%] px-[4%] py-[6vh]'>
        <span className='w-full flex items-start justify-between mb-[20px]'>
            <h2 className='text-[22px] font-bold uppercase'>players</h2> 
            <span className='flex items-center justify-center gap-[15px]'>
                <button className='text-[18px] text-red-600' onClick={sliderHandlePrev}><FaAngleLeft/></button>
                <button className='text-[18px] text-red-600' onClick={sliderHandleNext}><FaAngleRight/></button>
            </span>
        </span>

        {PData.map((player, i) => (
            i === slider - 1 && 


        <span className='w-full flex items-center lg:justify-between justify-center flex-wrap gap-[30px]'>
            <span key={player.id1} className={darkMode ? 'w-[250px] h-[300px] bg-black flex relative text-white cursor-pointer items-start justify-center overflow-hidden' : 'w-[250px] h-[300px] bg-[#111] flex relative text-white cursor-pointer items-start justify-center overflow-hidden'}>
                <img src={player.image1} alt='Player Not Available' className='w-full mb-3'/>
                <span className='absolute w-[60px] top-0 left-0 h-full bg-black/40 flex flex-col items-center justify-between pt-5 pb-3 gap-[20px]'>
                    <p className='rotate-[270deg] text-[12px] capitalize font-light'>{player.position1}</p>
                    <p className='w-[200px] rotate-[270deg] uppercase mt-3 text-[16px] font-bold'>{player.name1}</p>
                    <h3 className='text-[16px] font-semibold'>{player.number1}</h3>
                </span>
            </span>

            <span key={player.id2} className={darkMode ? 'w-[250px] h-[300px] bg-black flex relative text-white cursor-pointer items-start justify-center overflow-hidden' : 'w-[250px] h-[300px] bg-[#111] flex relative text-white cursor-pointer items-start justify-center overflow-hidden'}>
                <img src={player.image2} className='w-full' alt='player2'/>
                <span className='absolute w-[60px] top-0 left-0 h-full bg-black/40 flex flex-col items-center justify-between pt-5 pb-3 gap-[20px]'>
                    <p className='rotate-[270deg] text-[12px] capitalize font-light'>{player.position2}</p>
                    <p className='w-[200px] rotate-[270deg] uppercase mt-6 text-[16px] font-bold'>{player.name2}</p>
                    <h3 className='text-[16px] font-semibold'>{player.number2}</h3>
                </span>
            </span>

            <span key={player.id3} className={darkMode ? 'w-[250px] h-[300px] bg-black flex relative text-white cursor-pointer items-start justify-center overflow-hidden' : 'w-[250px] h-[300px] bg-[#111] flex relative text-white cursor-pointer items-start justify-center overflow-hidden'}>
                <img src={player.image3} className='w-full' alt='player3'/>
                <span className='absolute w-[60px] top-0 left-0 h-full bg-black/40 flex flex-col items-center justify-between pt-5 pb-3 gap-[20px]'>
                    <p className='rotate-[270deg] text-[12px] capitalize font-light'>{player.position3}</p>
                    <p className='w-[200px] rotate-[270deg] uppercase mt-6 text-[16px] font-bold'>{player.name3}</p>
                    <h3 className='text-[16px] font-semibold'>{player.number3}</h3>
                </span>
            </span>

            <span key={player.id4} className={darkMode ? 'w-[250px] h-[300px] bg-black flex relative text-white cursor-pointer items-start justify-center overflow-hidden' : 'w-[250px] h-[300px] bg-[#111] flex relative text-white cursor-pointer items-start justify-center overflow-hidden'}>
                <img src={player.image4} className='w-full' alt='player4'/>
                <span className='absolute w-[60px] top-0 left-0 h-full bg-black/40 flex flex-col items-center justify-between pt-5 pb-3 gap-[20px]'>
                    <p className='rotate-[270deg] text-[12px] capitalize font-light'>{player.position4}</p>
                    <p className='w-[200px] rotate-[270deg] uppercase mt-6 text-[16px] font-bold'>{player.name4}</p>
                    <h3 className='text-[16px] font-semibold'>{player.number4}</h3>
                </span>
            </span>
        </span>
            ))}
    </div>
  )
}

export default Player