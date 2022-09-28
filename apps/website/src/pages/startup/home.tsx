import React, { useEffect, useRef, useState } from 'react';
import TemplatePage from '../../components/miurac-page/templatePage';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { pagesInfo } from './pagesInfo';
gsap.registerPlugin(ScrollTrigger);
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function StartUp({}: Props) {
  const ref = useRef<HTMLDivElement>();
  useEffect(() => {
    const element = ref.current;
    if (element) {
      for (const p of pagesInfo) {
          gsap.to(
            element.querySelector(`#${p.id}`),
            {
              scrollTrigger: {
                trigger: element.querySelector(`#${p.id}`),
                start: 'top top',
                pin: true,
                pinSpacing: false,
                // snap: 1,
              },
            }
          );
      }
    }
  }, []);
  return (
    <div
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      ref={ref}
    >
        
      {pagesInfo.map(
        ({ id, bgColor, text, img, centerAlignText, captionText, cta }) => (
          <React.Fragment key={id}>
            <TemplatePage
              bgColor={bgColor}
              id={id}
              text={text}
              captionText={captionText}
              heroImage={img}
              centerAlignText={centerAlignText}
              cta={cta} direction={'up'}/>
          </React.Fragment>
        )
      )}
    </div>
  );
}
