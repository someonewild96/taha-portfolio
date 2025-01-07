import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { useScroll } from '@react-three/drei';

export default function Scene() {
  const laptopRef = useRef<THREE.Group>(null);
  const scroll = useScroll();
  
  // Create animated code texture
  const codeTexture = new THREE.CanvasTexture(createCodeCanvas());
  codeTexture.wrapS = THREE.RepeatWrapping;
  codeTexture.wrapT = THREE.RepeatWrapping;

  useFrame((state) => {
    if (laptopRef.current) {
      // Hide laptop based on scroll
      laptopRef.current.position.y = 0 - scroll.offset * 4;
      laptopRef.current.rotation.x = scroll.offset * Math.PI / 4;
      laptopRef.current.rotation.y += 0.01;
    }
    // Animate code texture
    codeTexture.offset.y += 0.005;
  });

  return (
    <>
      <color attach="background" args={['#1a1a1a']} />
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[0, 3, 0]} intensity={50} color="#4834d4" />

      <group ref={laptopRef} position={[0, 0, 0]} rotation={[0.2, 0, 0]}>
        {/* Laptop base */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3, 0.2, 2]} />
          <meshStandardMaterial color="#2d3436" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Laptop screen frame */}
        <mesh position={[0, 1.2, -0.8]} rotation={[Math.PI / 6, 0, 0]}>
          <boxGeometry args={[3, 2, 0.1]} />
          <meshStandardMaterial color="#2d3436" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Screen display with animated code */}
        <mesh position={[0, 1.21, -0.75]} rotation={[Math.PI / 6, 0, 0]}>
          <planeGeometry args={[2.8, 1.8]} />
          <meshStandardMaterial 
            map={codeTexture}
            emissive="#4834d4"
            emissiveIntensity={0.8}
            emissiveMap={codeTexture}
          />
        </mesh>

        {/* Keyboard glow */}
        <mesh position={[0, 0.1, 0]}>
          <planeGeometry args={[2.8, 1.8]} />
          <meshStandardMaterial 
            emissive="#4834d4"
            emissiveIntensity={0.3}
            transparent
            opacity={0.5}
          />
        </mesh>
      </group>

      {/* Ground reflection */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial 
          color="#2d3436"
          metalness={0.8}
          roughness={0.2}
          emissive="#4834d4"
          emissiveIntensity={0.1}
        />
      </mesh>
    </>
  );
}

function createCodeCanvas() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.font = '12px monospace';
    ctx.fillStyle = '#4834d4';
    
    const lines = [
      'function code() {',
      '  const data = [];',
      '  for (let i = 0; i < 100; i++) {',
      '    data.push(process(i));',
      '  }',
      '  return data;',
      '}',
      'const result = code();',
      'console.log(result);'
    ];
    
    for (let i = 0; i < 20; i++) {
      lines.forEach((line, index) => {
        ctx.fillText(line, 10, (index * 20) + (i * 180));
      });
    }
  }
  
  return canvas;
}