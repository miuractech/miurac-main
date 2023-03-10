import React, { useEffect, useRef, useState } from 'react';
import TemplatePage from '../../components/miurac-page/templatePage';
import { pagesInfo } from './pagesInfo';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToTop from '../../components/utils/ScrollToTop';
import { useWindowScroll } from '@mantine/hooks';
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
  const [scroll, scrollTo] = useWindowScroll();
  useEffect(() => {
    const element = ref.current;
    const tls: gsap.core.Tween[] = []
    if (element) {
      for (const p of pagesInfo) {
        const ts = gsap.to(element.querySelector(`#${p.id}`), {
          scrollTrigger: {
            trigger: element.querySelector(`#${p.id}`),
            start: 'top top',
            pin: true,
            pinSpacing: false,
            snap: {
              snapTo: 1,
              duration: 0.8,
              inertia:false
            },
          },
        });
        tls.push(ts)
      }
    }
    return () =>{
      tls.forEach(t=>t.progress(0).kill())
    }
  }, []);
  return (
    <div
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      ref={ref} className='scroll'
      >
      
      {pagesInfo.map(({ id, bgColor, text, img, captionText },index) => (
        <React.Fragment key={id}>
          <TemplatePage
            bgColor={bgColor}
            id={id}
            text={text}
            heroImage={img}
            centerAlignText
            captionText={captionText}
            showScrollAnimation={index===0}
            />
        </React.Fragment>
      ))}
      <ScrollToTop visible={scroll.y > 20} onClick={() => scrollTo({ y: 0 })} />
    </div>
  );
}
