/* eslint-disable @typescript-eslint/ban-ts-comment */
// App.js
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { CoverSlide } from '../scenes/wave';
import { CameraControls } from '@react-three/drei';
import { Button, Navbar } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons';
import './style.css'
// const DEG45 = Math.PI / 4;
const Landing = () => {
  const cameraRef = useRef<any>();
  const cameraControlRef = useRef<CameraControls | null>(null);
  const onWindowResize = () => {
    cameraRef.current.aspect = window.innerWidth / window.innerHeight;
    cameraRef.current.updateProjectionMatrix();
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     
  //   }, 2500);
  // }, []);

  return (
    <Suspense fallback={<>loading....</>}>

      <div className="w-full font-medium text-3xl z-10 fixed px-4 md:text-center bg-transparent">
        MIURAC
      </div>
      <div className="font-medium right-4 text-3xl z-20 absolute text-center bg-transparent">
        <Button rightIcon={<IconArrowUpRight />} variant='outline' >
          Shareholder Login
        </Button>
      </div>
   
      <div className='h-screen'>
        <Canvas
        //@ts-ignore
          onResize={onWindowResize}
          shadows
        >
          <Suspense fallback={null}>
            <PerspectiveCamera
              ref={cameraRef}
              makeDefault
              position={[0, 0, 10]}
            />
            <CameraControls ref={cameraControlRef} />
            <CoverSlide />
          </Suspense>
        </Canvas>
      </div>
    </Suspense>
  );
};

export default Landing;
