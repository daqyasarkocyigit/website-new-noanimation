import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

const DataEngineeringModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.children.forEach((child, i) => {
        child.position.y = Math.sin(state.clock.elapsedTime + i) * 0.1;
      });
    }
  });

  return (
    <group ref={groupRef}>
      <Cylinder args={[0.5, 0.5, 2, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ff1414" metalness={0.8} roughness={0.2} />
      </Cylinder>
      
      {[...Array(8)].map((_, i) => (
        <Box
          key={i}
          args={[0.2, 0.2, 0.2]}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 1.2,
            0,
            Math.sin((i / 8) * Math.PI * 2) * 1.2
          ]}
        >
          <meshStandardMaterial color="#4b78ff" metalness={0.6} roughness={0.3} />
        </Box>
      ))}
      
      <Torus args={[1.2, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.3} />
      </Torus>
    </group>
  );
};

export default DataEngineeringModel;