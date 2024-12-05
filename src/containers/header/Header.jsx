import React from 'react'
import './header.css'
import {
  motion,
  useScroll,
  useTransform,
  Variants,
  stagger,
} from 'framer-motion'

import Marquee from 'react-fast-marquee'

const Header = () => {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [0, -2500])
  const y = useTransform(scrollYProgress, [0, 1], [0, 3000])

  const textAnimate = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.8,
        duration: 0.1,
      },
    },
  }
  return (
    <motion.div
      className="portfolio__header"
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <div className="portfolio__header-animation bottom-border">
        <motion.h1
          style={{ x: x }}
          variants={textAnimate}
        >
          Creative
        </motion.h1>
      </div>

      <div className="portfolio__header-animation bottom-border">
        <motion.h1
          variants={textAnimate}
          style={{ x: y }}
        >
          Developer
        </motion.h1>
      </div>

      <div className="portfolio__header-animation bottom-border">
        <motion.h1
          style={{ x: x }}
          variants={textAnimate}
        >
          Based in
        </motion.h1>
      </div>

      <div className="portfolio__header-animation bottom-border">
        <motion.h1
          style={{ x: y }}
          variants={textAnimate}
        >
          Auckland
        </motion.h1>
      </div>
    </motion.div>
  )
}

export default Header
