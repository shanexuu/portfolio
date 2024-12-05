import React from 'react'
import './animations.css'
import { Circle, Dots, BoucingBalls, JumpingBalls } from '../../components'

const Animations = () => {
  return (
    <div className="portfolio__animations-container row">
      <div className="portfolio__circle col-6 col-sm-3 bottom-border py-5">
        <Circle />
      </div>
      <div className="portfolio__circle col-6  col-sm-3 bottom-border">
        <JumpingBalls />
      </div>
      <div className="portfolio__circle col-6 col-sm-3 bottom-border py-5">
        <BoucingBalls />
      </div>
      <div className="portfolio__circle dot col-6 col-sm-3 bottom-border">
        <Dots />
      </div>
    </div>
  )
}

export default Animations
