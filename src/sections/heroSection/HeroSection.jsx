import React from 'react'
import './style.css'
import Navbar from '../../components/navbar/Navbar'

function HeroSection() {
  return (
    <div className='background-section'>
      <Navbar />
      <div className='welcom-msg'>
        <h1>Welcome To Golden View Dine</h1>
        <p>Explore the authentic vegan dishes with your frinds and family</p>
        <button>Read more</button>
      </div>
    </div>
  )
}

export default HeroSection