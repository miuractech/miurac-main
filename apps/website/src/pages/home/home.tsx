import React, { useEffect, useRef, useState } from 'react';
import TemplatePage from '../../components/miurac-page/templatePage';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { pagesInfo } from './pagesInfo';
import { useCounter } from '@mantine/hooks';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from '../../components/utils/ScrollToTop';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function Home({}: Props) {
  const [count, handlers] = useState({ current: 0, direction: 'up' });
  const fullScreen = useSelector((state: RootState) => state.toogleCta);
 

  return (
    <ReactScrollWheelHandler
      downHandler={() => {
        if (count.current < pagesInfo.length - 1 && !fullScreen)
          handlers((v) => ({ current: v.current + 1, direction: 'up' }));
      }}
      upHandler={() => {
        if (count.current > 0 && !fullScreen)
          handlers((v) => ({ current: v.current - 1, direction: 'down' }));
      }}
    >
      <AnimatePresence mode="sync">
        {pagesInfo.map(
          (
            { id, bgColor, text, img, centerAlignText, captionText, cta },
            index
          ) =>
            // <React.Fragment key={id}>
            count.current === index &&
            count.direction === 'up' && (
              <TemplatePage
                key={id}
                bgColor={bgColor}
                id={id}
                text={text}
                direction={'up'}
                captionText={captionText}
                heroImage={img}
                centerAlignText={centerAlignText}
                cta={cta}
                
              />
            )
        )}

        {pagesInfo.map(
          (
            { id, bgColor, text, img, centerAlignText, captionText, cta },
            index
          ) =>
            // <React.Fragment key={id}>
            count.current === index &&
            count.direction === 'down' && (
              <TemplatePage
                key={id + 'down'}
                bgColor={bgColor}
                id={id}
                text={text}
                direction={'down'}
                captionText={captionText}
                heroImage={img}
                centerAlignText={centerAlignText}
                cta={cta}
              />
            )
        )}
      </AnimatePresence>
      <ScrollToTop visible={count.current > 0}  onClick={()=>handlers({current:0,direction:"up"})} />
    </ReactScrollWheelHandler>
    // </React.Fragment>
  );
}
