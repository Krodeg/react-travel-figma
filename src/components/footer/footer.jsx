import React from 'react'
import { FooterContainer } from '../../style'

function Footer() {
  return (
    <FooterContainer>
        <div className="footer-col-1">
            <h1>Jadoo.</h1>
            <p>Book your trip in minute, get full <br />Control for much longer.</p>
        </div>
        <div className="footer-col-2">
            <h2 className='footer-title'>Company</h2>
            <p className='footer-element'>About</p>
            <p className='footer-element'>Careers</p>
            <p className='footer-element'>Mobile</p>
        </div>
        <div className="footer-col-3">
            <h2 className='footer-title'>Contact</h2>
            <p className='footer-element'>Help/FAQ</p>
            <p className='footer-element'>Press</p>
            <p className='footer-element'>Affilates</p>
        </div>
        <div className="footer-col-4">
            <h2 className='footer-title'>More</h2>
            <p className='footer-element'>Airlinefees</p>
            <p className='footer-element'>Airline</p>
            <p className='footer-element'>Low fare tips</p>
        </div>
    </FooterContainer>
  )
}

export default Footer
