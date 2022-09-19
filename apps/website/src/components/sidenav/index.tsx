import React from 'react'
import { motion, useCycle } from "framer-motion";
import { Navigation } from './sidenav';
import { MenuToggle } from './toogle';
const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };
export default function Index() {
    const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <motion.nav
    initial={false}
    animate={isOpen ? "open" : "closed"}
    custom="100%"
    className='absolute right-0 top-0 bottom-0 w-80'
  >
    <motion.div className="top-0 right-0 bottom-0 w-80" variants={sidebar} />
    <Navigation />
    <MenuToggle toggle={() => toggleOpen()} />
  </motion.nav>
  )
}