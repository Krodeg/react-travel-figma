import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/home'
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'

function RouterComponent() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent
