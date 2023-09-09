import React from 'react'
import UpperHeader from './upperHeader'
import HomeBanner from './HomeBanner'
import NextMatches from './NextMatches'
import Media from './Media'
import Statistics from './Statistics'
import Player from './Player'
import OfficialStore from './OfficialStore'
import News from './News'
import InstagramProfile from './instagramProfile'
import Videos from './Videos'
import Review from './Review'
import WordPress from './WordPress'
import Footer from './Footer'

//DATA IMPORTS

import ReviewDT from '../Data/ReviewsData'
import PlayerStat from '../Data/StatsData'
import MatchDate from '../Data/MatchesData'
import PlayerData from '../Data/PlayersData'
import DesignedBy from './DesignedBy'
import StoreItems from '../Data/StoreData'
import VideoData from '../Data/VideosData'

const Home = ({darkMode}) => {

    const RData = ReviewDT;
    const PStat = PlayerStat;
    const Mdate = MatchDate;
    const PData = PlayerData;
    const SItems = StoreItems
    const VData = VideoData

    // console.log(RData);
  return (
    <div className='w-full flex flex-col items-start justify-start'>
        <UpperHeader darkMode={darkMode}/>
        <HomeBanner darkMode={darkMode}/>
        <NextMatches Mdate={Mdate} darkMode={darkMode}/>
        <Media/>
        <Statistics PStat={PStat}/>
        <Player PData={PData} darkMode={darkMode}/>
        <OfficialStore darkMode={darkMode} SItems={SItems}/>
        <News darkMode={darkMode}/>
        <InstagramProfile darkMode={darkMode}/>
        <Videos VData={VData}/>
        <Review RData={RData} darkMode={darkMode}/>
        <WordPress/>
        <Footer/>
        <DesignedBy darkMode={darkMode}/>
    </div>
  )
}

export default Home