import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ServiceAnimationProps {
  type: 'data-engineering' | 'data-visualization' | 'business-intelligence' | 'cloud-modernization' | 'ai-engineering';
}

const ServiceAnimation: React.FC<ServiceAnimationProps> = ({ type }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    sceneRef.current = new THREE.Scene();
    
    // Initialize camera
    const aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
    cameraRef.current = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    cameraRef.current.position.z = 5;

    // Initialize renderer
    rendererRef.current = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    rendererRef.current.setClearColor(0x000000, 0);
    containerRef.current.appendChild(rendererRef.current.domElement);

    // Create animation based on type
    const createAnimation = () => {
      if (!sceneRef.current) return;

      switch (type) {
        case 'data-engineering':
          createDataEngineeringAnimation();
          break;
        case 'data-visualization':
          createDataVisualizationAnimation();
          break;
        case 'business-intelligence':
          createBusinessIntelligenceAnimation();
          break;
        case 'cloud-modernization':
          createCloudModernizationAnimation();
          break;
        case 'ai-engineering':
          createAIEngineeringAnimation();
          break;
      }
    };

    const createDataEngineeringAnimation = () => {
      if (!sceneRef.current) return;

      // Create data flow pipes
      const pipes = new THREE.Group();
      
      // Create main pipe
      const pipeGeometry = new THREE.CylinderGeometry(0.1, 0.1, 4, 32);
      const pipeMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x444444,
        shininess: 100,
        transparent: true,
        opacity: 0.9
      });
      
      const pipe = new THREE.Mesh(pipeGeometry, pipeMaterial);
      pipe.rotation.x = Math.PI / 2;
      pipes.add(pipe);

      // Add data cubes
      const cubeGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
      const cubeMaterial = new THREE.MeshPhongMaterial({
        color: 0xff1414,
        emissive: 0xff1414,
        emissiveIntensity: 0.2
      });

      for (let i = 0; i < 5; i++) {
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.z = -2 + i;
        pipes.add(cube);
      }

      sceneRef.current.add(pipes);

      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(5, 5, 5);
      
      sceneRef.current.add(ambientLight);
      sceneRef.current.add(pointLight);

      // Animation loop
      const animate = () => {
        if (!sceneRef.current || !rendererRef.current || !cameraRef.current) return;

        pipes.rotation.y += 0.01;
        pipes.children.forEach((child, index) => {
          if (index > 0) { // Skip the main pipe
            child.position.z = (child.position.z + 0.02) % 4 - 2;
          }
        });

        rendererRef.current.render(sceneRef.current, cameraRef.current);
        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animate();
    };

    const createDataVisualizationAnimation = () => {
      if (!sceneRef.current) return;

      const charts = new THREE.Group();

      // Create base grid
      const gridGeometry = new THREE.PlaneGeometry(4, 4, 10, 10);
      const gridMaterial = new THREE.MeshPhongMaterial({
        color: 0x333333,
        wireframe: true
      });
      const grid = new THREE.Mesh(gridGeometry, gridMaterial);
      grid.rotation.x = -Math.PI / 2;
      charts.add(grid);

      // Create animated bars
      const bars: THREE.Mesh[] = [];
      for (let i = 0; i < 5; i++) {
        const barGeometry = new THREE.BoxGeometry(0.3, 2, 0.3);
        const barMaterial = new THREE.MeshPhongMaterial({
          color: 0xff1414,
          transparent: true,
          opacity: 0.8
        });
        const bar = new THREE.Mesh(barGeometry, barMaterial);
        bar.position.set(-1.5 + i * 0.8, 1, 0);
        bar.scale.y = Math.random();
        bars.push(bar);
        charts.add(bar);
      }

      sceneRef.current.add(charts);

      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(5, 5, 5);
      
      sceneRef.current.add(ambientLight);
      sceneRef.current.add(pointLight);

      // Animation loop
      const animate = () => {
        if (!sceneRef.current || !rendererRef.current || !cameraRef.current) return;

        bars.forEach((bar) => {
          bar.scale.y = Math.max(0.1, Math.sin(Date.now() * 0.001 + bar.position.x) + 1);
        });

        charts.rotation.y += 0.005;

        rendererRef.current.render(sceneRef.current, cameraRef.current);
        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animate();
    };

    const createBusinessIntelligenceAnimation = () => {
      if (!sceneRef.current) return;

      const dashboard = new THREE.Group();

      // Create floating screens
      for (let i = 0; i < 3; i++) {
        const screenGeometry = new THREE.PlaneGeometry(2, 1.2);
        const screenMaterial = new THREE.MeshPhongMaterial({
          color: 0x222222,
          emissive: 0x111111,
          transparent: true,
          opacity: 0.9
        });
        const screen = new THREE.Mesh(screenGeometry, screenMaterial);
        
        screen.position.y = Math.sin(i * Math.PI * 2 / 3) * 1.5;
        screen.position.x = Math.cos(i * Math.PI * 2 / 3) * 1.5;
        screen.lookAt(0, 0, 0);
        
        dashboard.add(screen);

        // Add graph lines to screens
        const lineGeometry = new THREE.BufferGeometry();
        const points = [];
        for (let j = 0; j < 10; j++) {
          points.push(
            -0.8 + j * 0.2,
            Math.sin(j * 0.5) * 0.3,
            0.01
          );
        }
        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
        
        const lineMaterial = new THREE.LineBasicMaterial({ 
          color: 0xff1414,
          linewidth: 2
        });
        const line = new THREE.Line(lineGeometry, lineMaterial);
        line.position.copy(screen.position);
        line.rotation.copy(screen.rotation);
        dashboard.add(line);
      }

      sceneRef.current.add(dashboard);

      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(5, 5, 5);
      
      sceneRef.current.add(ambientLight);
      sceneRef.current.add(pointLight);

      // Animation loop
      const animate = () => {
        if (!sceneRef.current || !rendererRef.current || !cameraRef.current) return;

        dashboard.rotation.y += 0.005;

        rendererRef.current.render(sceneRef.current, cameraRef.current);
        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animate();
    };

    const createCloudModernizationAnimation = () => {
      if (!sceneRef.current) return;

      const cloudSystem = new THREE.Group();

      // Create cloud particles
      const particleGeometry = new THREE.SphereGeometry(0.1, 8, 8);
      const particleMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.8
      });

      for (let i = 0; i < 20; i++) {
        const particle = new THREE.Mesh(particleGeometry, particleMaterial);
        const theta = Math.random() * Math.PI * 2;
        const radius = 1 + Math.random();
        
        particle.position.x = Math.cos(theta) * radius;
        particle.position.y = Math.sin(theta) * radius;
        particle.position.z = (Math.random() - 0.5) * 2;
        
        cloudSystem.add(particle);
      }

      // Add connecting lines
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xff1414,
        transparent: true,
        opacity: 0.3
      });

      for (let i = 0; i < cloudSystem.children.length - 1; i++) {
        const points = [];
        points.push(cloudSystem.children[i].position);
        points.push(cloudSystem.children[i + 1].position);
        
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(lineGeometry, lineMaterial);
        cloudSystem.add(line);
      }

      sceneRef.current.add(cloudSystem);

      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(5, 5, 5);
      
      sceneRef.current.add(ambientLight);
      sceneRef.current.add(pointLight);

      // Animation loop
      const animate = () => {
        if (!sceneRef.current || !rendererRef.current || !cameraRef.current) return;

        cloudSystem.rotation.y += 0.005;
        cloudSystem.children.forEach((child, index) => {
          if (index < 20) { // Only animate particles, not lines
            child.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
          }
        });

        rendererRef.current.render(sceneRef.current, cameraRef.current);
        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animate();
    };

    const createAIEngineeringAnimation = () => {
      if (!sceneRef.current) return;

      const neuralNetwork = new THREE.Group();

      // Create nodes
      const nodeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
      const nodeMaterial = new THREE.MeshPhongMaterial({
        color: 0xff1414,
        emissive: 0xff1414,
        emissiveIntensity: 0.2
      });

      const nodes: THREE.Mesh[] = [];
      const layers = [4, 6, 4];
      
      layers.forEach((layerSize, layerIndex) => {
        for (let i = 0; i < layerSize; i++) {
          const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
          node.position.x = (layerIndex - 1) * 2;
          node.position.y = (i - layerSize/2) * 0.5;
          nodes.push(node);
          neuralNetwork.add(node);
        }
      });

      // Create connections
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x666666,
        transparent: true,
        opacity: 0.3
      });

      // Connect each node to all nodes in the next layer
      for (let layer = 0; layer < layers.length - 1; layer++) {
        const startIndex = layers.slice(0, layer).reduce((a, b) => a + b, 0);
        const nextStartIndex = startIndex + layers[layer];
        
        for (let i = startIndex; i < nextStartIndex; i++) {
          for (let j = nextStartIndex; j < nextStartIndex + layers[layer + 1]; j++) {
            const points = [];
            points.push(nodes[i].position);
            points.push(nodes[j].position);
            
            const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(lineGeometry, lineMaterial);
            neuralNetwork.add(line);
          }
        }
      }

      sceneRef.current.add(neuralNetwork);

      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(5, 5, 5);
      
      sceneRef.current.add(ambientLight);
      sceneRef.current.add(pointLight);

      // Animation loop
      const animate = () => {
        if (!sceneRef.current || !rendererRef.current || !cameraRef.current) return;

        neuralNetwork.rotation.y = Math.sin(Date.now() * 0.001) * 0.2;
        nodes.forEach((node, index) => {
          node.scale.setScalar(1 + Math.sin(Date.now() * 0.001 + index) * 0.2);
        });

        rendererRef.current.render(sceneRef.current, cameraRef.current);
        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animate();
    };

    // Initialize animation
    createAnimation();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();

      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, [type]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-64 md:h-96 rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800"
    />
  );
};

export default ServiceAnimation;