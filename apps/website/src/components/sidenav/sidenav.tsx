import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./items";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Items = [
  { id: "0", text: "Home", icon: "🏠" },
  { id: "1", text: "About", icon: "ℹ️" },
  { id: "2", text: "Projects", icon: "💻" },
  { id: "3", text: "Blogs", icon: "✍️" },
  { id: "4", text: "Contact", icon: "📧" }
];

export const Navigation = () => (
  <motion.ul className="p-6 absolute top-24 w-60 m-0 p-0" variants={variants}>
    {Items.map((item) => (
      <MenuItem id={item.id} key={item.id} text={item.text} icon={item.icon} />
    ))}
  </motion.ul>
);
