import React, { useState, useEffect } from 'react'
import { Project } from '../../components'

import './projects.css'
import Pic_pro01 from '../../assets/project01.png'
import Pic_pro02 from '../../assets/project02.png'
import Pic_pro03 from '../../assets/project03.png'
import Pic_pro04 from '../../assets/project04.png'
import Pic_pro05 from '../../assets/project05.png'
import logo from '../../assets/logo.png'

const Projects = () => {
  const [rotation, setRotation] = useState(0)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = () => {
    const currentScrollY = window.scrollY

    if (currentScrollY > lastScrollY) {
      setRotation((prevRotation) => prevRotation + 4)
    } else if (currentScrollY < lastScrollY) {
      setRotation((prevRotation) => prevRotation - 4)
    }

    setLastScrollY(currentScrollY) // Update the last scroll position
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div
      className="portfolio__projects"
      id="projects"
    >
      <div className="portfolio__text bottom-border d-flex gap-3 ">
        <h1 className="text-center">Recent Projects</h1>
        <h1
          className="rotating text-center"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          ✺
        </h1>
      </div>

      <Project
        title="Savr"
        skill="Full-stack&nbsp;&nbsp;●&nbsp;&nbsp;Mobile App Development"
        description={`Savr is a personal finance app developed to empower users with simple yet powerful tools for managing their money. It enables users to set budgets, categorize expenses, and track spending in real time. With personalized insights, the app provides visual summaries and trend analysis to support smarter financial decisions.`}
        imgUrl={Pic_pro05}
        link={'https://github.com/shanexuu/fintech-savr-app'}
      />
      <Project
        title="Foliage & Vine"
        skill="UI/UX Design&nbsp;&nbsp;●&nbsp;&nbsp;Ecommerce"
        description={`Foliage & Vine is an e-commerce platform specializing in indoor plants and gardening essentials. The site combines style and functionality, making it easy to browse and shop for high-quality products.`}
        imgUrl={Pic_pro01}
        link={'https://www.foliageandvine.co.nz/'}
      />

      <Project
        title="Crust & Crumb"
        skill="UI/UX Design&nbsp;&nbsp;●&nbsp;&nbsp;Front-end"
        description={`Crust & Crumb is a beautifully designed bakery website that captures the charm and warmth of traditional baking. With a clean layout and thoughtful design elements, it showcases the bakery’s offerings while providing an intuitive browsing experience.`}
        imgUrl={Pic_pro03}
        link={'https://crustandcrumb.netlify.app/'}
      />
      <Project
        title="Gardenia"
        skill="UI/UX Design&nbsp;&nbsp;●&nbsp;&nbsp;Front-end"
        description={`Gardenia is designed as an engaging landing page to highlight exclusive plant workshops. With its clean design and intuitive layout, it effectively showcases workshop details while providing a seamless user experience.`}
        imgUrl={Pic_pro04}
        link={'https://gardenia-yun-xu.netlify.app/'}
      />
    </div>
  )
}

export default Projects
