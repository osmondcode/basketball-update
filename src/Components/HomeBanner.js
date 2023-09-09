import React, { useState } from 'react'
import Header from "./Header";
import HomeBannerText from './HomeBannerText';
import HomeBannerSub from './HomeBannerSub';
import SlideDown from "./SlideDown";

const HomeBanner = ({darkMode}) => {
  const [slider, setSlider] = useState(false)

  const sliderHandle = () => {
    setSlider(!slider)
  }
  return (
    <div className='w-full min-h-[95vh] relative flex flex-col lg:px-[7%] px-[4%] curry-bg text-white'>
        <Header slider={slider} sliderHandle={sliderHandle}/>
        {slider && <SlideDown slider={slider}/>}
        <HomeBannerText darkMode={darkMode}/>
        <HomeBannerSub/>
    </div>
  )
}

export default HomeBanner