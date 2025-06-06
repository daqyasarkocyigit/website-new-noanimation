import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

const AIModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.children.forEach((child, i) => {
        const scale = Math.sin(state.clock.elapsedTime * 2 + i) * 0.1 + 1;
        child.scale.set(scale, scale, scale);
      });
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere args={[0.8, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ff1414" metalness={0.7} roughness={0.3} />
      </Sphere>
      
      {[...Array(12)].map((_, i) => {
        const phi = Math.acos(-1 + (2 * i) / 12);
        const theta = Math.sqrt(12 * Math.PI) * phi;
        
        return (
          <Box
            key={i}
            args={[0.2, 0.2, 0.2]}
            position={[
              Math.cos(theta) * Math.sin(phi) * 1.5,
              Math.sin(theta) * Math.sin(phi) * 1.5,
              Math.cos(phi) * 1.5
            ]}
          >
            <meshStandardMaterial color="#4b78ff" metalness={0.6} roughness={0.3} />
          </Box>
        );
      })}
    </group>
  );
};

export default AIModel;