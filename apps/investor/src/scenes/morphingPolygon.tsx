/* eslint-disable @typescript-eslint/ban-ts-comment */
// MorphingWireframe.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
// @ts-ignore
// import openSimplexNoise from 'https://cdn.skypack.dev/open-simplex-noise';

const MorphingWireframe = () => {
  const meshRef = useRef<any>();
  useFrame(() => {
    if (meshRef.current && meshRef.current?.geometry.morphAttributes) {
      // const noise = openSimplexNoise.makeNoise4D(Date.now());
      const inital = Math.random()/40
      meshRef.current.rotation.x += inital;
      meshRef.current.rotation.y += inital+(Math.random()/40);
      meshRef.current.rotation.y += Math.random()/40;
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <lineSegments position={[4, -3, 0]} ref={meshRef}>
      <icosahedronGeometry
        attach="geometry"
        args={[1, 0]}
      ></icosahedronGeometry>
      <lineBasicMaterial attach="material" color="violet" linewidth={4} />
    </lineSegments>
  );
};

export default MorphingWireframe;
