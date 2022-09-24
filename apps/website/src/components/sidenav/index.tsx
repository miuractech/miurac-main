import React from 'react'
import { motion, useCycle } from "framer-motion";
import { Navigation } from './sidenav';
import { MenuToggle } from './toogle';
import { useClickOutside } from '@mantine/hooks';
const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(2000px at -40px 400px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(0px at 280px 40px)",
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
    const [inside, setInside] = React.useState(false);
    const ref = useClickOutside(() => {
      if(isOpen)toggleOpen()
    });
  return (
    <motion.nav
    initial={false}
    animate={isOpen ? "open" : "closed"}
    custom="100%"
    className='fixed right-0 top-0 bottom-0 w-80'
    ref={ref}
  >
    <motion.div className="absolute top-0 bottom-0 w-80 bg-[#202025] " variants={sidebar} />
    <Navigation />
    <MenuToggle toggle={() => toggleOpen()} inside={inside} setInside={setInside} isOpen={isOpen} />
  </motion.nav>
  )
}