import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#fef6e4", "#f582ae", "#8bd3dd", "#b8c1ec", "#ff8906"];

export const MenuItem = ({ id, text, icon }:{id:string,text:string,icon:string}) => {
  const style = { border: `3px solid ${colors[parseInt(id)]}`, flex:"40px 0" };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className='list-none mb-4 flex items-center cursor-pointer m-0 p-0'
    >
      <div className="w-10 h-10 rounded-full mr-5" style={style}>
        <span className="flex items-center justify-center text-center text-2xl">{icon}</span>
      </div>

      <div className="rounded-sm w-52 h-5" style={style}>
        <span className="text-green-400">{text}</span>
      </div>
    </motion.li>
  );
};
