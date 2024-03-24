import React from 'react'
import { AboutUsContianer, BestServicesContainer, CategoryContainer, HeaderButton, HomeContainer, LogoContainer, TopDestinationContainer, TopSellingContainer, TopSellingImg, TripContainer } from '../../style'

import box1 from '../../assets/box-1-img.svg';
import box2 from '../../assets/box-2-img.svg';
import box3 from '../../assets/box-3-img.png';
import box4 from '../../assets/box-4-img.svg';

import destination1 from '../../assets/destination-1.png'
import destination2 from '../../assets/destination-2.png'
import destination3 from '../../assets/destination-3.png'
import navigation from '../../assets/navigation.svg'

import boxDecore from '../../assets/box-decore.png'

import trip1 from '../../assets/trip-1.svg'
import trip2 from '../../assets/trip-2.svg'
import trip3 from '../../assets/trip-3.png'

import tripRight from '../../assets/trip-right.png'

import threeDots from '../../assets/three-dots.svg'

import aboutUsImg from '../../assets/about-us-right-img.png'


import logo1 from '../../assets/logo-1.png'
import logo2 from '../../assets/logo-2.png'
import logo3 from '../../assets/logo-3.png'
import logo4 from '../../assets/logo-4.png'
import logo5 from '../../assets/logo-5.png'

function Home() {
  return (
    <div>
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
            <img src={boxDecore} alt="decore"  style={{position: "relative", left: "-230px", zIndex: "-1", marginTop: "300px"}}/>
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
        <h1 style={{marginBottom: "50px"}}>Top Destinations</h1>
        <TopDestinationContainer>
          <div className="box">
            <div className='italy-container'>
              <TopSellingImg src={destination1} />
            </div>

            <div className='description-container' style={{display: "flex", flexDirection: 'column', gap: "19px"}}>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <p>Rome, Italty</p>
                <p>$5,42k</p>
              </div>
              <div style={{display: "flex", gap: "10px"}}>
                <img src={navigation} alt="" />
                <p>10 Days Trip</p>
              </div>
            </div>
          </div>

          <div className="box">
            <div className='italy-container'>
              <TopSellingImg src={destination2} />
            </div>
          </div>

          <div className="box">
            <div className='italy-container'>
              <TopSellingImg src={destination3} />
            </div>

            <div className='description-container' style={{display: "flex", flexDirection: 'column', gap: "19px"}}>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <p>Full Europe</p>
                <p>$15k</p>
              </div>
              <div style={{display: "flex", gap: "10px"}}>
                <img src={navigation} alt="" />
                <p>28 Days Trip</p>
              </div>
            </div>
          </div>
        </TopDestinationContainer>
      </TopSellingContainer>

      <TripContainer>
        <div className="left" style={{display: "flex", flexDirection: "column", alignItems: "self-start"}}>
          <p className='trip-container-title'>Easy and Fast</p>
          <h1>Book your next trip <br />in 3 easy steps</h1>
          <div style={{display: "flex", gap: "20px", marginTop: "30px"}}>
            <img src={trip1} alt="choose destination" />
            <div>
              <p className='trip-first-title' style={{marginBottom: "5px"}}>Choose Destination</p>
              <p className='trip-second-title'>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Urna, tortor tempus. </p>
            </div>
          </div>

          <div style={{display: "flex", gap: "20px", margin: "40px 0"}}>
            <img src={trip2} alt="choose destination" />
            <div>
              <p className='trip-first-title' style={{marginBottom: "5px"}}>Make Payment</p>
              <p className='trip-second-title'>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Urna, tortor tempus. </p>
            </div>
          </div>

          <div style={{display: "flex", gap: "20px"}}>
            <img src={trip3} alt="choose destination" />
            <div>
              <p className='trip-first-title' style={{marginBottom: "5px"}}>Reach Airport on Selected Date</p>
              <p className='trip-second-title'>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Urna, tortor tempus. </p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={tripRight} alt="" />
        </div>
      </TripContainer>

      {/* about us */}
      <AboutUsContianer>
        <div className="left">
          <p>Testimonials</p>
          <h1 style={{margin: "5px 0 50px 0"}}>What people say <br />About Us.</h1>
          <img src={threeDots} alt="" />
        </div>
        <div className="right">
          <img src={aboutUsImg} alt="" />
        </div>
      </AboutUsContianer>

      {/* Logos */}
      <LogoContainer>
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <div>
          <img src={logo3} alt="" />
        </div>
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
      </LogoContainer>
      
      {/* Footer top */}
    </div>
  )
}

export default Home
