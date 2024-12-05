import * as React from 'react'
import { useState } from 'react'
import { render } from 'react-dom'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { distance } from '@popmotion/popcorn'

import './circles.css'

const grid = [
  [0, 1],
  [2, 3],
]
const size = 40
const gap = 10

const Square = ({ active, setActive, colIndex, rowIndex, x, y }) => {
  const isDragging = colIndex === active.col && rowIndex === active.row
  const d = distance(
    { x: active.col, y: active.row },
    { x: colIndex, y: rowIndex }
  )
  const springConfig = {
    stiffness: Math.max(700 - d * 120, 0),
    damping: 20 + d * 5,
  }
  const dx = useSpring(x, springConfig)
  const dy = useSpring(y, springConfig)

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      style={{
        background: `hsla(21, 61%, 44%, 1)`,
        width: size,
        height: size,
        top: rowIndex * (size + gap),
        left: colIndex * (size + gap),
        position: 'absolute',
        borderRadius: '50%',
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0,
      }}
    />
  )
}

const Circles = () => {
  const [active, setActive] = useState({ row: 0, col: 0 })
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  return (
    <div className="portfolio__circles">
      <motion.div
        transition={{ duration: 10, loop: Infinity, ease: 'linear' }}
        style={{ width: '100%', height: '100%' }}
      >
        <motion.div
          style={{
            display: 'flex',
            width: (size + gap) * 2 - gap,
            height: (size + gap) * 2 - gap,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            position: 'relative',
            perspective: 500,
          }}
        >
          {grid.map((row, rowIndex) =>
            row.map((_item, colIndex) => (
              <Square
                x={x}
                y={y}
                active={active}
                setActive={setActive}
                rowIndex={rowIndex}
                colIndex={colIndex}
                key={rowIndex + colIndex}
              />
            ))
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Circles
