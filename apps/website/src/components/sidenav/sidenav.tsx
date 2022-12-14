import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./items";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2}
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Items = [
  { id: "0", text: "Home", icon: "đ " },
  { id: "1", text: "About", icon: "âšī¸" },
  { id: "2", text: "Projects", icon: "đģ" },
  { id: "3", text: "Blogs", icon: "âī¸" },
  { id: "4", text: "Contact", icon: "đ§" }
];

export const Navigation = () => (
  <motion.ul className=" absolute top-10 w-2/3 m-0 p-0" variants={variants}>
    {Items.map((item) => (
      <MenuItem id={item.id} key={item.id} text={item.text} icon={item.icon} />
    ))}
  </motion.ul>
);
