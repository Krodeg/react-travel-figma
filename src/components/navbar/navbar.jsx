import React from 'react'
import { NavbarContainer, NavbarSignUpButton } from '../../style'
import logo from '../../assets/logo.png'
import downLogo from '../../assets/down-arrow.svg'
import navbarDecore from '../../assets/navbar-decore.png'


function Navbar() {
  return (
    <NavbarContainer>
      <div>
        <img src={logo} alt="Logo"/>
      </div>
      <div style={{display: "flex", gap: "55px", alignItems: "center"}}>
        <p style={{cursor: "pointer"}}>Desitnations</p>
        <p style={{cursor: "pointer"}}>Hotels</p>
        <p style={{cursor: "pointer"}}>Flights</p>
        <p style={{cursor: "pointer"}}>Bookings</p>
        <p style={{cursor: "pointer"}}>Login</p>
        <NavbarSignUpButton style={{cursor: "pointer"}}>Sign up</NavbarSignUpButton>
        <p style={{display: "flex", alignItems: "center", gap: "5px", cursor: "pointer"}}>EN <img src={downLogo} alt="arrow" /></p>
      </div>
      <div style={{position: "absolute", top: "0", right: "0", zIndex: "-1"}}>
        <img src={navbarDecore} alt="decore" />
      </div>
    </NavbarContainer>
  )
}

export default Navbar
