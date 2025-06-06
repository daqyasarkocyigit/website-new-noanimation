import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const VisualizationModel: React.FC = () => {
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
      {[...Array(5)].map((_, i) => (
        <group key={i} position={[0, i * 0.5 - 1, 0]}>
          <Box args={[2, 0.1, 0.5]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#ff1414" metalness={0.6} roughness={0.2} />
          </Box>
          <Sphere args={[0.15]} position={[1.2, 0, 0]}>
            <meshStandardMaterial color="#4b78ff" metalness={0.8} roughness={0.2} />
          </Sphere>
        </group>
      ))}
    </group>
  );
};

export default VisualizationModel;