import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Line } from '@react-three/drei';
import * as THREE from 'three';

const AIModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.children.forEach((child, i) => {
        if (child.name === 'neuron') {
          const scale = Math.sin(state.clock.elapsedTime * 2 + i) * 0.2 + 1;
          child.scale.set(scale, scale, scale);
        }
      });
    }
  });

  // Create neural network structure
  const neurons = [];
  const connections = [];
  const connectionPoints = [];

  // Create three layers of neurons
  const layers = [4, 6, 4];
  let neuronCount = 0;

  layers.forEach((count, layerIndex) => {
    const xPos = (layerIndex - 1) * 2;
    
    for (let i = 0; i < count; i++) {
      const yPos = (i - (count - 1) / 2) * 0.8;
      
      neurons.push(
        <Box
          key={`neuron-${neuronCount}`}
          name="neuron"
          args={[0.3, 0.3, 0.3]}
          position={[xPos, yPos, 0]}
        >
          <meshStandardMaterial color={layerIndex === 1 ? "#ff1414" : "#4b78ff"} metalness={0.6} roughness={0.2} />
        </Box>
      );

      // Connect to next layer
      if (layerIndex < layers.length - 1) {
        for (let j = 0; j < layers[layerIndex + 1]; j++) {
          const nextYPos = (j - (layers[layerIndex + 1] - 1) / 2) * 0.8;
          
          connectionPoints.push(
            new THREE.Vector3(xPos, yPos, 0),
            new THREE.Vector3(xPos + 2, nextYPos, 0)
          );
          
          connections.push(
            <Line
              key={`connection-${neuronCount}-${j}`}
              points={connectionPoints.slice(-2)}
              color="#ffffff"
              lineWidth={1}
              opacity={0.3}
              transparent
            />
          );
        }
      }
      
      neuronCount++;
    }
  });

  return (
    <group ref={groupRef}>
      {neurons}
      {connections}
    </group>
  );
};

export default AIModel;