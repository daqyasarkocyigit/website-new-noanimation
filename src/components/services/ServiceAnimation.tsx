import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

interface ServiceAnimationProps {
  type: 'data-engineering' | 'data-visualization' | 'business-intelligence' | 'cloud-modernization' | 'ai-engineering';
}

const ServiceAnimation: React.FC<ServiceAnimationProps> = ({ type }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Animation specific setup
    const setupAnimation = () => {
      switch (type) {
        case 'data-engineering':
          createDataEngineeringAnimation(scene);
          break;
        case 'data-visualization':
          createDataVisualizationAnimation(scene);
          break;
        case 'business-intelligence':
          createBusinessIntelligenceAnimation(scene);
          break;
        case 'cloud-modernization':
          createCloudModernizationAnimation(scene);
          break;
        case 'ai-engineering':
          createAIEngineeringAnimation(scene);
          break;
      }
    };

    setupAnimation();

    // Animation loop
    const animate = () => {
      if (!scene || !camera || !renderer) return;

      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [type]);

  // Data Engineering Animation
  const createDataEngineeringAnimation = (scene: THREE.Scene) => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({
      color: 0x6b7689,
      transparent: true,
      opacity: 0.8,
    });

    const cubes: THREE.Mesh[] = [];
    for (let i = 0; i < 5; i++) {
      const cube = new THREE.Mesh(geometry, material);
      cube.position.x = (i - 2) * 1.5;
      scene.add(cube);
      cubes.push(cube);

      gsap.to(cube.position, {
        y: Math.sin(i) * 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.2,
      });

      gsap.to(cube.rotation, {
        y: Math.PI * 2,
        duration: 3,
        repeat: -1,
        ease: "none",
      });
    }

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
  };

  // Data Visualization Animation
  const createDataVisualizationAnimation = (scene: THREE.Scene) => {
    const barGeometry = new THREE.BoxGeometry(0.5, 0.1, 0.5);
    const barMaterial = new THREE.MeshPhongMaterial({
      color: 0xff6b6b,
      transparent: true,
      opacity: 0.9,
    });

    const bars: THREE.Mesh[] = [];
    for (let i = 0; i < 8; i++) {
      const bar = new THREE.Mesh(barGeometry, barMaterial);
      bar.position.x = (i - 3.5) * 0.8;
      scene.add(bar);
      bars.push(bar);

      gsap.to(bar.scale, {
        y: Math.random() * 10 + 5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.1,
      });
    }

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
  };

  // Business Intelligence Animation
  const createBusinessIntelligenceAnimation = (scene: THREE.Scene) => {
    const sphereGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x4b78ff,
      transparent: true,
      opacity: 0.8,
    });

    const spheres: THREE.Mesh[] = [];
    for (let i = 0; i < 12; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      const angle = (i / 12) * Math.PI * 2;
      sphere.position.x = Math.cos(angle) * 2;
      sphere.position.z = Math.sin(angle) * 2;
      scene.add(sphere);
      spheres.push(sphere);

      gsap.to(sphere.position, {
        y: Math.sin(i) * 0.5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.1,
      });
    }

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
  };

  // Cloud Modernization Animation
  const createCloudModernizationAnimation = (scene: THREE.Scene) => {
    const cloudGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const cloudMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
    });

    const clouds: THREE.Mesh[] = [];
    for (let i = 0; i < 5; i++) {
      const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
      cloud.position.x = (i - 2) * 1.5;
      cloud.position.y = Math.sin(i) * 0.5;
      scene.add(cloud);
      clouds.push(cloud);

      gsap.to(cloud.position, {
        y: cloud.position.y + 1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.3,
      });

      gsap.to(cloud.scale, {
        x: 1.2,
        y: 1.2,
        z: 1.2,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.2,
      });
    }

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
  };

  // AI Engineering Animation
  const createAIEngineeringAnimation = (scene: THREE.Scene) => {
    const nodeGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const nodeMaterial = new THREE.MeshPhongMaterial({
      color: 0x6b7689,
      transparent: true,
      opacity: 0.8,
    });

    const nodes: THREE.Mesh[] = [];
    const nodePositions: THREE.Vector3[] = [];

    // Create neural network nodes
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 4; j++) {
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        node.position.x = (j - 1.5) * 1.2;
        node.position.y = (i - 1) * 1.2;
        scene.add(node);
        nodes.push(node);
        nodePositions.push(node.position.clone());

        gsap.to(node.scale, {
          x: 1.3,
          y: 1.3,
          z: 1.3,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: (i * 4 + j) * 0.1,
        });
      }
    }

    // Create connections between nodes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x4b78ff,
      transparent: true,
      opacity: 0.3,
    });

    for (let i = 0; i < nodePositions.length - 4; i++) {
      for (let j = 4; j < 8; j++) {
        const geometry = new THREE.BufferGeometry().setFromPoints([
          nodePositions[i],
          nodePositions[j],
        ]);
        const line = new THREE.Line(geometry, lineMaterial);
        scene.add(line);
      }
    }

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
  };

  return (
    <div 
      ref={containerRef} 
      className="w-full h-64 md:h-96 relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden"
    />
  );
};

export default ServiceAnimation;