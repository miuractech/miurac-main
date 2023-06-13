/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable no-empty-pattern */
import { Button, Text } from '@mantine/core';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import AnimatedElement from './utils';
import landingImage from '../assets/problems/landing.png';
import { useNavigate } from 'react-router-dom';
interface props {
//   setCurrSlide: React.Dispatch<React.SetStateAction<number>>;
}
export default function Slide1({ }: props) {
    const navigate = useNavigate()
  return (
    <AnimatedElement delay={0} key="landing">
      <div className="md:h-screen h-full py-7 md:py-0">
        <div className="flex h-full justify-center items-center text-center">
          <div>
            <div className="w-full max-w-xl">
              <AnimatedElement delay={0} key={'landing-img'}>
                <img src={landingImage} className="w-full max-w-xs" alt="" />
              </AnimatedElement>
              <AnimatedElement delay={0.6} key={'landing-text'}>
                <Text className="px-9 text-2xl md:text-[28px]">
                  Imagine you're a small business owner, who realized that
                  having a custom app will be a game-changer for you.
                </Text>
              </AnimatedElement>
            </div>
            <br />
            <div className="w-full text-center">
              <AnimatedElement delay={1.2} key={'landing-button'}>
                <Button
                  onClick={() => {
                    // setCurrSlide(1);
                    navigate('2')
                  }}
                >
                  Build your app now
                </Button>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </AnimatedElement>
  );
}
