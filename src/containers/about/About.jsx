import React from 'react'
import './about.css'
import Marquee from 'react-fast-marquee'
import logo from '../../assets/logo_large.png'
import { motion, Variants } from 'framer-motion'
import MarqueeText from 'react-marquee-text'

const About = () => {
  const imageAnimate = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,

      transition: { type: 'spring', bounce: 0.4, duration: 1 },
    },
  }
  const textAnimate = {
    offscreen: { y: 300, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', bounce: 0.4, duration: 1 },
    },
  }
  return (
    <motion.div
      className="portfolio__about"
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.5 }}
      id="about"
    >
      <div className="row">
        {/* Image Section */}
        <div className="portfolio__about_animate col-12 col-lg-4 col-sm-4 bottom-border">
          <motion.img
            src={logo}
            variants={imageAnimate}
            className="img-fluid"
          />
        </div>

        {/* Text Section */}
        <div className="col-12 col-sm-8 col-lg-4 bottom-border portfolio__about-text">
          <motion.p variants={textAnimate}>
            Hi, I'm Yun Xu. I’m a full-stack developer with a deep interest in
            crafting websites that are as intuitive as visually compelling. My
            tech journey started with a curiosity for how things work behind the
            scenes, which quickly grew into a passion for creating user-friendly
            web experiences from the ground up.
          </motion.p>
        </div>

        <div className="col-12 col-sm-12 col-lg-4 bottom-border portfolio__about-text">
          <motion.p variants={textAnimate}>
            My goal is to create websites that not only look great but also
            provide a seamless experience for users. I’m always open to new
            opportunities and collaborations, so feel free to reach out—I’d love
            to connect and create something amazing together!
          </motion.p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="portfolio__about-skills">
        <Marquee
          autoFill="true"
          direction="right"
          className="bottom-border"
        >
          <h1>Web Development✢</h1>
        </Marquee>
        <Marquee
          autoFill="true"
          className="bottom-border"
        >
          <h1>UI/UX Design✴︎</h1>
        </Marquee>
        <Marquee
          autoFill="true"
          direction="right"
          className="bottom-border"
        >
          <h1>Software Development☆</h1>
        </Marquee>
        <Marquee
          autoFill="true"
          className="bottom-border"
        >
          <h1>Mobile Development✺</h1>
        </Marquee>
      </div>
    </motion.div>
  )
}

export default About
