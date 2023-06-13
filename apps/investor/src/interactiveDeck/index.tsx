import React, { useEffect, useState } from 'react';
import './style.css';
// import Slide1 from './slide1';
import { AnimatePresence } from 'framer-motion';
// import Slide2 from './slide2';
import { Outlet } from 'react-router-dom';

export default function InteractiveDeck() {
  const [currSlide, setCurrSlide] = useState(0);
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const width = window.innerWidth;
      const cursorX = e.clientX;

      if (cursorX < width / 2) {
        document.body.classList.add('cursor-left');
        document.body.classList.remove('cursor-right');
      } else {
        document.body.classList.add('cursor-right');
        document.body.classList.remove('cursor-left');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  //   const GetCurrentSlide = () => {
  //     switch (currSlide) {
  //       case 0:
  //         return <Slide1 key={'slide1'} setCurrSlide={setCurrSlide} />;
  //       case 1:
  //         return <Slide2 key={'slide2'} setCurrSlide={setCurrSlide} />;
  //       default:
  //         return <Slide1 setCurrSlide={setCurrSlide} />;
  //     }
  //   };
  return (
    <AnimatePresence mode="wait">
      <Outlet />
    </AnimatePresence>
  );
}
