import React from 'react'
import './project.css'
import { motion } from 'framer-motion'
import { IoReturnDownForwardSharp } from 'react-icons/io5'

const Project = ({ title, skill, description, imgUrl, link }) => {
  const imageAnimate = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: { type: 'spring', bounce: 0.4, duration: 1 },
    },
  }

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
      className="portfolio__project row bottom-border"
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <div className="portfolio__img col-12 col-lg-6 p-4">
        <motion.img
          src={imgUrl}
          alt={title}
          variants={imageAnimate}
          class="img-fluid"
        />
      </div>
      <div className="portfolio__project-text  col-12">
        <motion.h1 variants={textAnimate}>{title}</motion.h1>
        <motion.div
          className="portfolio__des"
          dangerouslySetInnerHTML={{
            __html: description.replace(/\n/g, '<br>'),
          }}
          variants={textAnimate}
        ></motion.div>
        <div className="portfolio__project-more">
          <motion.h4 variants={textAnimate}>{skill}</motion.h4>
          <motion.a
            variants={textAnimate}
            href={link}
            target="_blank"
          >
            <IoReturnDownForwardSharp className="react-icons" />
            View Project
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default Project
