import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ScrollControls } from '@react-three/drei';
import Scene from './components/Scene';
import Interface from './components/Interface';

export default function App() {
  return (
    <div className="h-screen w-screen">
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 8]
        }}
      >
        <Suspense fallback={null}>
          <ScrollControls pages={2} damping={0.3}>
            <Scene />
          </ScrollControls>
          <OrbitControls enableDamping enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
        </Suspense>
      </Canvas>
      <Interface />
    </div>
  );
}