import { React, useEffect } from 'react'

import './App.css'
import {
  Header,
  About,
  Projects,
  Contact,
  Footer,
  Animations,
} from './containers'
import { Navbar } from './components'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const App = () => {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  })

  return (
    <div className="App">
      <motion.div
        className="cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
      <Navbar />
      <Header />
      <About />
      <Animations />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
