/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Html, OrbitControls, Sphere } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import MorphingWireframe from './morphingPolygon';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

export function CoverSlide() {
  const meshRef = useRef<THREE.Mesh>(null);
  //   const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);

  useFrame(() => {
    // Rotate the sphere on the z-axis every frame
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <>
      <OrbitControls target={[0, 0, 0]} />
      {/* @react-three/drei camera pointing to origin from front view */}

      <color args={[0, 0, 0]} attach={'background'} />
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      {/* // a html component inside 3js fiber  */}
      <Html position={[-2, 0, 0]}>
        <div className="p-4 flex flex-row justify-center items-middle gap-5">
          <a href="/deck">
            <Button color="violet">see deck</Button>
          </a>
          <Button color="violet">request financial data</Button>
        </div>
      </Html>

      {/* // a very smooth @react/drei 3d sphere rotated to left side 90 deg made out of wires that spins on z axis in violet color*/}
      <Sphere
        args={[10, 30, 20]}
        // sphere positioned to top left
        position={[-7, 7, 0]}
        ref={meshRef}
        rotation={[0, 0, -Math.PI / 2]}
      >
        <meshBasicMaterial wireframeLinecap="round" wireframe color="#3333ff" />
      </Sphere>
      <MorphingWireframe />
    </>
  );
}

// a @react/drei 3d polygon wireframe that morphs with time violet color

// function AnimationCanvas() {
//   return (
//     <Canvas
//       colorManagement={false}
//       camera={{ position: [100, 10, 0], fov: 75 }}
//     >
//       <Suspense fallback={null}>
//         <Points />
//       </Suspense>
//       <CameraControls/>
//     </Canvas>
//   );
// }

// function App() {
//   return (
//     <div className="anim">
//       <Suspense fallback={<div>Loading...</div>}>
//         <AnimationCanvas />
//       </Suspense>
//     </div>
//   );
// }

// export default App;
