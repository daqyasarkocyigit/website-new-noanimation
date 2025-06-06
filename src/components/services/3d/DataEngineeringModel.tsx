import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Line } from '@react-three/drei';
import * as THREE from 'three';

const DataEngineeringModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.children.forEach((child, i) => {
        if (child.name === 'dataNode') {
          child.position.y = Math.sin(state.clock.elapsedTime + i) * 0.1;
        }
      });
    }
  });

  // Create data flow pipeline structure
  const nodes = [];
  const lines = [];
  const points = [];
  
  // Create pipeline nodes
  for (let i = 0; i < 5; i++) {
    nodes.push(
      <Box
        key={`node-${i}`}
        name="dataNode"
        args={[0.4, 0.4, 0.4]}
        position={[-2 + i, 0, 0]}
      >
        <meshStandardMaterial color={i % 2 === 0 ? "#ff1414" : "#4b78ff"} metalness={0.6} roughness={0.2} />
      </Box>
    );

    // Add connection points for pipeline flow
    if (i < 4) {
      points.push(
        new THREE.Vector3(-2 + i, 0, 0),
        new THREE.Vector3(-1.5 + i, 0.3, 0),
        new THREE.Vector3(-1 + i, 0, 0)
      );
      
      lines.push(
        <Line
          key={`line-${i}`}
          points={points.slice(-3)}
          color="#ffffff"
          lineWidth={1}
        />
      );
    }
  }

  return (
    <group ref={groupRef}>
      {nodes}
      {lines}
    </group>
  );
};

export default DataEngineeringModel;