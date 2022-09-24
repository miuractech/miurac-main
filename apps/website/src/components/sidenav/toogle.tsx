import * as React from 'react';
import { motion } from 'framer-motion';

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    // className=""
    stroke={props.inside ? '#d0d0d0' : '#202025'}
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({
  toggle,
  inside,
  setInside,
  isOpen,
}: {
  toggle: () => void;
  inside: boolean;
  setInside: (b: boolean) => void;
  isOpen:boolean
}) => {
  return (
    <button
      onMouseEnter={() => setInside(true)}
      onMouseLeave={() => setInside(false)}
      className={`absolute right-4 top-5 rounded-full ${
        inside ? 'bg-[#202025]' : 'bg-transparent'
      } h-12 w-12 border-none cursor-pointer `}
      onClick={toggle}
    >
      <svg width="23" height="23" viewBox="0 -8 23 31">
        <Path
          inside={inside || isOpen}
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        {/* <Path
      stroke={"#202025"}
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      /> */}
        <Path
          inside={inside || isOpen}
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  );
};
