// SpinningCube.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { BoxGeometry, MeshStandardMaterial } from 'three';

const SpinningCube = ({ position, args, color }:any) => {
  const meshRef = useRef<any>();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh position={position} ref={meshRef}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default SpinningCube;
