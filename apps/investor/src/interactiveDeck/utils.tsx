import React from 'react'
import { motion } from 'framer-motion';
type Props = {
    children:JSX.Element,
    delay:number
    key:string
}

export default function AnimatedElement({children,delay, key}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6 },
    }}
    key={key}
    exit={{ opacity: 0, y: 25, transition: { duration: 0.6 } }}
  >
    {children}
  </motion.div>
  )
}