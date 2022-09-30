import { motion, useAnimationControls } from 'framer-motion';
import { Button, Center, Text } from '@mantine/core';
// import LazyImage from 'libs/resources/src/lib/LazyImage';
// import { useState } from 'react';
// import { AnimatedCTAButton } from '../animatedCTA';
import { CTA } from '../cta/cta';
import Lottie from 'lottie-react';
import scrollDownAnimation from '../../assets/lottie/scroll-down.json';
import ScrollToTop from '../utils/ScrollToTop';
type Props = {
  bgColor: string;
  id: string;
  text: string;
  heroImage: string;
  centerAlignText?: boolean;
  captionText: string | React.ReactNode;
  direction: 'up' | 'down';
  showScrollAnimation?: boolean;
  showScrollToTop?:boolean;
  onScrollToTop?:()=>void;
  cta?: {
    link?: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    buttonText: string | React.ReactNode;
  };
};

export default function TemplatePage({
  bgColor,
  id,
  text,
  heroImage,
  centerAlignText,
  captionText,
  direction,
  showScrollToTop,
  onScrollToTop,
  cta,
  showScrollAnimation,
}: Props) {
  // const [clicked, setClicked] = useState(false);
  // const controls = useAnimationControls()
  // useEffect(() => {
  //   if(exitDirection === 'up')  controls.start({ y: 0,  zIndex:0});
  //   if(exitDirection === 'down')  controls.start({  y:direction === 'up'?0:"100vh", zIndex:direction === 'up'?0:100 });
  // }, [exitDirection])

  return (
    <motion.div
      key={id}
      id={id}
      className="w-screen template-shadow fixed"
      style={{ background: bgColor, height: '100vh' }}
      initial={{
        y: direction === 'up' ? '100vh' : '-100vh',
        zIndex: direction === 'up' ? 20 : 0,
      }}
      animate={{ y: 0, zIndex: 10 }}
      exit={{ y: 0, zIndex: 0, transition: { duration: 0.4 } }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <div className="h-16" />
      <div className="flex h-full flex-col-reverse md:flex-row">
        <div
          className={`flex flex-col gap-10 w-full h-3/5 md:w-full md:h-5/6 justify-start pt-6 ${
            centerAlignText ? 'md:justify-center' : 'md:justify-evenly'
          }`}
        >
          <Text className="text-shadow mx-3 md:ml-20 md:text-left text-center text-4xl md:text-7xl leading-tight text-[#1E1E20]">
            {text}
          </Text>
          <div className="mx-3 md:ml-20 md:text-left text-md abeezee text-center">
            <div>{captionText}</div>
            <br />
            {cta && <CTA id={id} />}
          </div>
        </div>
        <Center className="md:h-full h-2/5 m-0 w-full">
          <img
            src={heroImage}
            className="h-full max-h-[600px] md:max-w-full block m-auto"
            alt="landing"
          />
        </Center>
        {showScrollAnimation && (
          <Lottie
            className="fixed md:bottom-8 bottom-32 z-50 w-32 -left-8 md:left-1/2"
            animationData={scrollDownAnimation}
          />
        )}
       {/* <ScrollToTop visible={count.current > 0}  onClick={()=> onScrollToTop()} /> */}
      </div>
    </motion.div>
  );
}
