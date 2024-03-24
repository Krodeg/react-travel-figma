import React from 'react'
import { HeaderButton, HomeContainer } from '../../style'
import headerDecore from '../../assets/header-decor.png'
import playButton from '../../assets/play-button.png'
import travelWomen from '../../assets/travel-women.png'

function Header() {
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
    </HomeContainer>
  )
}

export default Header
