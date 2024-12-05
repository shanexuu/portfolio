import React, { useState, useEffect } from 'react'
import './navbar.css'
import { motion } from 'framer-motion'

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { VscCircleFilled } from 'react-icons/vsc'

const Menu = () => (
  <>
    <p>
      <a href="#">
        <VscCircleFilled className="react-icons" />
        Hey
      </a>
    </p>
    <p>
      <a href="#about">
        <VscCircleFilled className="react-icons" />
        About
      </a>
    </p>
    <p>
      <a href="#projects">
        <VscCircleFilled className="react-icons" />
        Projects
      </a>
    </p>
    <p>
      <a href="#contact">
        <VscCircleFilled className="react-icons" />
        Contact
      </a>
    </p>
  </>
)

const Navbar = () => {
  const textAnimate = {
    offscreen: { y: 20, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', bounce: 0.4, duration: 1 },
    },
  }

  return (
    <div>
      <motion.div
        className="portfolio__navbar "
        id="portfolio__navbar"
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <motion.div
          className="portfolio__links section__padding"
          variants={textAnimate}
        >
          <Menu />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Navbar
