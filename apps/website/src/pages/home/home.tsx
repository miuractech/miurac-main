import React, { useEffect, useRef, useState } from 'react';
import TemplatePage from '../../components/miurac-page/templatePage';
import { pagesInfo } from './pagesInfo';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
// import { useCounter } from '@mantine/hooks';
// import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
// import { AnimatePresence } from 'framer-motion';
// import ScrollToTop from '../../components/utils/ScrollToTop';
// import { RootState } from '../../app/store';
// import { useSelector } from 'react-redux';
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function Home({}: Props) {
  const ref = useRef<HTMLDivElement>();
  useEffect(() => {
    const element = ref.current;
    if (element) {
      for (const p of pagesInfo) {
        gsap.to(element.querySelector(`#${p.id}`), {
          scrollTrigger: {
            trigger: element.querySelector(`#${p.id}`),
            start: 'top top',
            pin: true,
            pinSpacing: false,
            snap: 1,
          },
        });
      }
    }
  }, []);
  return (
    <div
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      ref={ref} className='scroll'
    >
      {pagesInfo.map(({ id, bgColor, text, img, captionText }) => (
        <React.Fragment key={id}>
          <TemplatePage
            bgColor={bgColor}
            id={id}
            text={text}
            heroImage={img}
            centerAlignText
            captionText={captionText}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
