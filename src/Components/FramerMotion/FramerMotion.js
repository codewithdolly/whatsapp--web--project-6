import React from 'react'
import "./App.scss"
import {motion, useViewportScroll, useTransform} from "framer-motion"

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
}

const FramerMotion = () => {
  const { scrollYProgress } = useViewportScroll()
const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <>
    <motion.div className="main"
    variants={icon}
    initial="hidden"
      animate="visible"
      d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
  animate={{
    x: 1,
    y: -50,
    scale: 1,
    rotate: 0,
  }}
>
Hello There
</motion.div>

<motion.div
    style={{ scale }}
  >
    <motion.div
      style={{
        scaleY: scrollYProgress
      }}
    />
    
  </motion.div>

  <motion.h1
  whileHover={{ scale: 1, rotate: 10 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}
  
>Hello There</motion.h1>
    </>
  )
}

export default FramerMotion;
