import React from 'react'
import './index.scss'
import Home from '../Home'
import Navbar from '../Navbar'

const index = () => {
  return (
    <div className="main-container-layout">
      <Navbar />
      <Home />
    </div>
  )
}

export default index
