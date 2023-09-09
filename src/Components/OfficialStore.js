import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const OfficialStore = ({SItems}) => {

  const [slider, setSlider] = useState(1)

  const sliderHandleNext = () => {
    if (slider !== SItems.length) {
      setSlider(slider + 1)
    } else if (slider === SItems.length){
      setSlider(1)
    }
  }

  const sliderHandlePrev = () => {
    if (slider !== 1) {
      setSlider(slider - 1)
    } else if (slider === 1){
      setSlider(SItems.length)
    }
  }

  return (
    <div className='w-full min-h-[60vh] lg:px-[7%] px-[4%] pt-[2vh] mb-[5vh]'>
              <span className='w-full flex items-start justify-between mb-[20px]'>
            <h2 className='text-[22px] font-bold uppercase'>official store</h2> 
            <span className='flex items-center justify-center gap-[15px]'>
                <button onClick={sliderHandlePrev} className='text-[18px] text-red-600'><FaAngleLeft/></button>
                <button onClick={sliderHandleNext} className='text-[18px] text-red-600'><FaAngleRight/></button>
            </span>
        </span>

        {SItems.map((item, i) => (

          i === slider - 1 &&
        <span className='w-full flex items-center lg:justify-between justify-center flex-wrap gap-[30px]'>
          <div key={item.id1} className='2sm:w-[320px] w-full h-[300px] flex flex-col items-center justify-center bg-red-600/30 p-3 cursor-pointer hover:scale-[1.03] duration-500'>
            
              <div className='w-full h-[160px] bg-orange-600/40 flex items-start justify-center overflow-hidden'>
                <img src={item.image1} alt='item 1'/>
              </div>
              <div className='w-full flex items-center justify-between my-1 font-semibold'>
                <h4 className='uppercase text-[14px]'>{item.name1}</h4>
                <h4>${item.price1}</h4>
              </div>
                <p className='text-[12px] text-start'>
                {item.about1}
                </p>
          </div>


          <div key={item.id2} className='2sm:w-[320px] w-full h-[300px] flex flex-col items-center justify-center bg-red-600/30 p-3 cursor-pointer hover:scale-[1.03] duration-500'>
            <div className='w-full h-[180px] bg-orange-600/40 flex items-start justify-center overflow-hidden'>
              <img src={item.image2} alt='item 2' className=''/>
            </div>
              <div className='w-full flex items-center justify-between my-1 font-semibold'>
                <h4 className='uppercase text-[14px]'>{item.name2}</h4>
                <h4>${item.price2}</h4>
              </div>
                <p className='text-[12px] text-start'>
                {item.about2}
                </p>
          </div>


          <div key={item.id3} className='2sm:w-[320px] w-full h-[300px] flex flex-col items-center justify-center bg-red-600/30 p-3 cursor-pointer hover:scale-[1.03] duration-500'>
            <div className='w-full h-[160px] bg-orange-600/40 flex items-start justify-center overflow-hidden'>
              <img src={item.image3} alt='item 3' />
            </div>
              <div className='w-full flex items-center justify-between my-1 font-semibold'>
                <h4 className='uppercase text-[14px]'>{item.name3}</h4>
                <h4>${item.price3}</h4>
              </div>
                <p className='text-[12px] text-start'>
                {item.about3}
                </p>
          </div>
        </span>
        ))}

    </div>
  )
}

export default OfficialStore