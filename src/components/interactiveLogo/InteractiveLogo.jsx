import React from 'react'
import './interactiveLogo.css'
import Spline from '@splinetool/react-spline'

const InteractiveLogo = () => {
  return (
    <div className="portfolio__logo-container">
      <Spline scene="https://prod.spline.design/SRgVMlCqiGhJKIfK/scene.splinecode" />
    </div>
  )
}

export default InteractiveLogo
