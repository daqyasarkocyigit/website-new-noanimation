import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

const CloudModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.children.forEach((child, i) => {
        child.position.y = Math.sin(state.clock.elapsedTime + i * 0.5) * 0.1;
      });
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ffffff" metalness={0.3} roughness={0.7} />
      </Sphere>
      
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        return (
          <Cylinder
            key={i}
            args={[0.1, 0.1, 2, 16]}
            position={[
              Math.cos(angle) * 1.5,
              0,
              Math.sin(angle) * 1.5
            ]}
            rotation={[Math.PI / 2, 0, angle]}
          >
            <meshStandardMaterial color="#4b78ff" metalness={0.6} roughness={0.3} />
          </Cylinder>
        );
      })}
    </group>
  );
};

export default CloudModel;