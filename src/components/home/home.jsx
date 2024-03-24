import React from 'react'
import { BestServicesContainer, CategoryContainer, HeaderButton, HomeContainer, TopSellingContainer } from '../../style'
import headerDecore from '../../assets/header-decor.png'
import playButton from '../../assets/play-button.png'
import travelWomen from '../../assets/travel-women.png'

import box1 from '../../assets/box-1-img.svg';
import box2 from '../../assets/box-2-img.svg';
import box3 from '../../assets/box-3-img.png';
import box4 from '../../assets/box-4-img.svg';

import boxDecore from '../../assets/box-decore.png'

function Home() {
  return (
    <HomeContainer>
      <div className="left">
        <p className='header-first-text'>Best Destinations around the world</p>
        <h1>Travel, enjoy <br />and live a new <br />and full life</h1>
        <img src={headerDecore} alt="underline" style={{position: "absolute", top: "320px", left: "300px", zIndex: "-1"}}/>
        <p className='header-text'>Built Wicket longer admire do barton vanity itself do in it. <br /> Preferred to sportsmen it engrossed listening. Park gate <br /> sell they west hard for the.</p>
        <div style={{display: "flex", alignItems: "center"}}>
          <HeaderButton>Find out more</HeaderButton>
          <div style={{display: "flex", alignItems: "center", height: "100%"}}>
            <img src={playButton} alt="play button" style={{marginTop: "30px", cursor: "pointer"}}/>
            <p style={{marginLeft: "-20px", color: "#686D77"}}>Play Demo</p>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={travelWomen} alt="people" />
      </div>

      {/* home */}
      <CategoryContainer>
        <p className='category-title'>CATEGORY </p>
        <h1>We Offer Best Services</h1>
        <BestServicesContainer>
          <div className="box">
            <img src={box1} alt="img" />
            <h3>Calculated Weather </h3>
            <p>Built Wicket longer</p>
            <p>admire do barton</p>
            <p>vanity itself do in it.</p>
          </div>

          <div className="box special">
            <img src={box2} alt="img" />
            <h3>Best Flights</h3>
            <p>Engrossed listening. </p>
            <p>Park gate sell they</p>
            <p>west hard for the.</p>
          </div>

          <div>
            <img src={boxDecore} alt="decore"  style={{position: "absolute", left: "570px", top: "380px", zIndex: "-1"}}/>
          </div>

          <div className="box">
            <img src={box3} alt="img" />
            <h3>Local Events</h3>
            <p>Barton vanity itself do</p>
            <p>in it. Preferd to men it</p>
            <p>engrossed listening.</p>
          </div>

          <div className="box">
            <img src={box4} alt="img" />
            <h3>Customization</h3>
            <p>We deliver outsourced</p>
            <p>aviation services for</p>
            <p>military customers</p>
          </div>
        </BestServicesContainer>
      </CategoryContainer>

      {/* top selling */}
      <TopSellingContainer>
        <p className='top-selling-title'>Top Selling</p>
      </TopSellingContainer>

    </HomeContainer>
  )
}

export default Home
