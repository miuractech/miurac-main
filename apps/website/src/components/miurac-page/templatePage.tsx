import { motion } from 'framer-motion';
import { Button, Center, Text } from '@mantine/core';
// import LazyImage from 'libs/resources/src/lib/LazyImage';
// import { useState } from 'react';
// import { AnimatedCTAButton } from '../animatedCTA';
import { CTA } from '../cta/cta';
import { useEffect } from 'react';
type Props = {
  bgColor: string;
  id: string;
  text: string;
  heroImage: string;
  centerAlignText?: boolean;
  captionText: string | React.ReactNode;
  direction: "up" | "down"
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
  cta,
}: Props) {
  // const [clicked, setClicked] = useState(false);
  // useEffect(() => {
    
  // }, [])
  
  return (
    <motion.div
      key={id}
      id={id}
      className="w-screen template-shadow fixed"
      style={{ backgroundColor: bgColor, height:"100vh" }}
      initial={{ y: direction === 'up'? "100vh":"100vh", zIndex: direction === 'up'?100:0}}
      animate={{ y: 0,  zIndex:direction === 'up'?10:100}}
      exit={{  y:direction === 'up'?0:"100vh", zIndex:direction === 'up'?0:100 }}
      transition={{duration:0.4,ease:'easeInOut'}}
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
            {cta && (
              <CTA />
            )}
          </div>
        </div>
        <Center className="md:h-full h-2/5 m-0 w-full">
          <img
            src={heroImage}
            className="h-full max-h-[600px] md:max-w-full block m-auto"
            alt="landing"
          />
        </Center>
      </div>
    </motion.div>
  );
}
