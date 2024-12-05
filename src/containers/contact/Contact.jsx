import React from 'react'
import './contact.css'
import { motion } from 'framer-motion'

const Contact = () => {
  const textAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', bounce: 0.4, duration: 1 },
    },
  }

  return (
    <motion.div
      className="portfolio__contact row"
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      id="contact"
    >
      <div className="porfolio__contact-text col-12 col-md-4 bottom-border text-center">
        <motion.p variants={textAnimate}>Get in touch</motion.p>
      </div>
      <div className="porfolio__contact-text col-12 col-md-4 bottom-border">
        <motion.a
          variants={textAnimate}
          href="mailto:hello@yun-xu.com"
        >
          hello@yun-xu.com
        </motion.a>
      </div>
      <div className="porfolio__contact-text col-12 col-md-4 bottom-border ">
        <motion.p variants={textAnimate}>Ph: +64 21 0838 7766</motion.p>
      </div>
    </motion.div>
  )
}

export default Contact
