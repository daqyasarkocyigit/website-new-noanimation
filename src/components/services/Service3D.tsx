import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface Service3DProps {
  icon: 'database' | 'chart' | 'analytics' | 'cloud' | 'brain';
}

const ServiceModel: React.FC<{ icon: string }> = ({ icon }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  const getGeometry = (type: string) => {
    switch (type) {
      case 'database':
        return new THREE.CylinderGeometry(1, 1, 2, 32);
      case 'chart':
        return new THREE.BoxGeometry(1.5, 2, 0.2);
      case 'analytics':
        return new THREE.TorusGeometry(1, 0.3, 16, 100);
      case 'cloud':
        return new THREE.SphereGeometry(1.2, 32, 32);
      case 'brain':
        return new THREE.IcosahedronGeometry(1.2, 1);
      default:
        return new THREE.BoxGeometry(1, 1, 1);
    }
  };

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <primitive object={getGeometry(icon)} />
      <meshStandardMaterial 
        color="#ff1414"
        roughness={0.3}
        metalness={0.7}
        emissive="#ff1414"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const Service3D: React.FC<Service3DProps> = ({ icon }) => {
  return (
    <div className="w-full h-64 bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <ServiceModel icon={icon} />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

export default Service3D;