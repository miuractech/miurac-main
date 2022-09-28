import React, { useEffect, useRef, useState } from 'react';
import TemplatePage from '../../components/miurac-page/templatePage';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { pagesInfo } from './pagesInfo';
import { useCounter } from '@mantine/hooks';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import { AnimatePresence } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function Home({}: Props) {
  // const ref = useRef<HTMLDivElement>();
  const [count, handlers] = useState({ current: 0, direction: 'up' });
  // useEffect(() => {
  //   const element = ref.current;
  //   if (element ) {
  //     for (const p of pagesInfo) {
  //         gsap.to(
  //           element.querySelector(`#${p.id}`),
  //           {
  //             scrollTrigger: {
  //               trigger: element.querySelector(`#${p.id}`),
  //               start: 'top top',
  //               pin: true,
  //               pinSpacing: false,
  //               snap: 1,
  //             },
  //           }
  //         );
  //     }
  //   }
  // }, []);
  console.log(count);

  return (
    <ReactScrollWheelHandler
      // style={{height:window.innerHeight}}
      // className='overflow-hidden'
      downHandler={() => {
        if (count.current < pagesInfo.length - 1)
          handlers((v) => ({ current: v.current + 1, direction: 'up' }));
      }}
      upHandler={() => {
        console.log('F');

        if (count.current > 0)
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
            (count.direction === 'up' ? (
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
            ) : (
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
            ))
            // </React.Fragment>
        )}
      </AnimatePresence>
    </ReactScrollWheelHandler>
  );
}
