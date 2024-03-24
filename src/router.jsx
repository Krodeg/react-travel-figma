import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/home'
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import Footer from './components/footer/footer'

function RouterComponent() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default RouterComponent
