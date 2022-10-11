import { useEffect, useRef } from 'react';
import TemplatePage from '../../components/miurac-page/templatePage';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { pagesInfo } from './pagesInfo';
gsap.registerPlugin(ScrollTrigger);
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
            snap: {
              snapTo: 1,
              duration: 0.8,
              inertia:false
            },
          },
        });
      }
    }
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    <div ref={ref}>
      {pagesInfo.map(
        (
          { id, bgColor, text, img, centerAlignText, captionText, cta },
          index
        ) => (
          <TemplatePage
            key={id}
            bgColor={bgColor}
            id={id}
            text={text}
            // direction={'up'}
            captionText={captionText}
            heroImage={img}
            centerAlignText={centerAlignText}
            // cta={cta}
          />
        )
      )}
    </div>
  );
}
