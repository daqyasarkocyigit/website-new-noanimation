import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Line } from '@react-three/drei';
import * as THREE from 'three';

const CloudModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.children.forEach((child, i) => {
        if (child.name === 'server') {
          child.position.y = Math.sin(state.clock.elapsedTime + i * 0.5) * 0.1;
        }
      });
    }
  });

  // Create cloud infrastructure elements
  const servers = [];
  const connections = [];
  const connectionPoints = [];

  // Create server racks
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      servers.push(
        <Box
          key={`server-${i}-${j}`}
          name="server"
          args={[0.8, 0.3, 0.3]}
          position={[-1 + i, -0.5 + j, 0]}
        >
          <meshStandardMaterial color="#4b78ff" metalness={0.7} roughness={0.2} />
        </Box>
      );
    }
  }

  // Create cloud connection network
  for (let i = 0; i < servers.length; i++) {
    for (let j = i + 1; j < servers.length; j++) {
      if (Math.random() > 0.5) {
        connectionPoints.push(
          new THREE.Vector3(-1 + (i % 3), -0.5 + Math.floor(i / 3), 0),
          new THREE.Vector3(-1 + (j % 3), -0.5 + Math.floor(j / 3), 0)
        );
        connections.push(
          <Line
            key={`connection-${i}-${j}`}
            points={connectionPoints.slice(-2)}
            color="#ff1414"
            lineWidth={1}
            opacity={0.5}
            transparent
          />
        );
      }
    }
  }

  return (
    <group ref={groupRef}>
      {servers}
      {connections}
    </group>
  );
};

export default CloudModel;