import { Center, Text } from '@mantine/core';
// import LazyImage from 'libs/resources/src/lib/LazyImage';
// import { useState } from 'react';
// import { AnimatedCTAButton } from '../animatedCTA';
import { CTA } from '../cta/cta';
import Lottie from 'lottie-react';
import scrollDownAnimation from '../../assets/lottie/scroll-down.json';
type Props = {
  bgColor: string;
  id: string;
  text: string;
  heroImage: string;
  centerAlignText?: boolean;
  captionText: string | React.ReactNode;
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
  cta,
  showScrollAnimation,
}: Props) {

  return (
    <div
      key={id}
      id={id}
      className="w-full template-shadow scroll"
      style={{ background: bgColor, height: '100vh' }}
    >
      <div className="h-20" />
      <div className="flex flex-col-reverse lg:flex-row" style={{height:"calc(100vh - 64px)"}}>
        <div
          className={`flex flex-col gap-10 w-full h-3/5 lg:w-full lg:h-5/6 justify-center lg:justify-start pt-6 ${
            centerAlignText ? 'lg:justify-center' : 'lg:justify-evenly'
          }`}
        >
          <Text className="text-shadow mx-3 lg:ml-20 lg:text-left text-center text-4xl lg:text-7xl leading-tight text-[#1E1E20]">
            {text}
          </Text>
          <div className="mx-3 lg:ml-20 lg:text-left text-md abeezee text-center">
            <div>{captionText}</div>
            <br />
            {cta && <CTA id={id} />}
          </div>
        </div>
        <Center className="lg:h-5/6 h-2/5 m-0 pt-6 w-full">
          <img
            src={heroImage}
            className="h-full max-h-[600px] lg:max-w-full block m-auto"
            alt="landing"
          />
        </Center>
        {showScrollAnimation && (
          <Lottie
            className="fixed lg:bottom-8 bottom-32 z-50 w-32 -left-8 lg:left-1/2"
            animationData={scrollDownAnimation}
          />
        )}
      </div>
    </div>
  );
}