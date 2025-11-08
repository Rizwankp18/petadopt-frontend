import React from 'react'
import { motion } from 'framer-motion'
function AnimationSection( {children}) {


const variants = {
    hidden: { opacity: 0, y: 100 }, // Starts 100px down and invisible
    visible: { opacity: 1, y: 0 },  // Ends at its original Y position and visible
  }

  return (
    <>
    
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5}} // Animates once when 50% of the element is in view
      transition={{ duration: 0.5, ease: "easeIn" }} // Smooth transition
    >
      {children}
    </motion.div>
    
    
    
    
    </>
  )
}

export default AnimationSection