import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Line } from '@react-three/drei';
import * as THREE from 'three';

const VisualizationModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.children.forEach((child, i) => {
        if (child.name === 'bar') {
          const scale = Math.sin(state.clock.elapsedTime + i) * 0.5 + 1.5;
          child.scale.y = scale;
        }
      });
    }
  });

  // Create interactive dashboard elements
  const bars = [];
  const lines = [];
  const gridPoints = [];

  // Create grid lines
  for (let i = 0; i <= 5; i++) {
    gridPoints.push(
      new THREE.Vector3(-2, -1 + (i * 0.4), 0),
      new THREE.Vector3(2, -1 + (i * 0.4), 0)
    );
    lines.push(
      <Line
        key={`grid-${i}`}
        points={gridPoints.slice(-2)}
        color="#4b78ff"
        lineWidth={1}
        opacity={0.3}
        transparent
      />
    );
  }

  // Create animated bars
  for (let i = 0; i < 8; i++) {
    bars.push(
      <Box
        key={`bar-${i}`}
        name="bar"
        args={[0.2, 1, 0.2]}
        position={[-1.75 + (i * 0.5), -0.5, 0]}
      >
        <meshStandardMaterial color={i % 2 === 0 ? "#ff1414" : "#4b78ff"} metalness={0.6} roughness={0.2} />
      </Box>
    );
  }

  return (
    <group ref={groupRef}>
      {lines}
      {bars}
    </group>
  );
};

export default VisualizationModel;