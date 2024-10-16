import React, { Suspense } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber'; 
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import '../styles/AnotherHeroSection.css';

// Load 3D Models
const FlyingModel = ({ path, position, rotationSpeed }) => {
  const obj = useLoader(OBJLoader, path);

  // Animate the models to rotate
  useFrame(() => {
    obj.rotation.y += rotationSpeed;
  });

  return <primitive object={obj} position={position} />;
};

const AnotherHeroSection = () => {
  return (
    <section className="another-hero-section">
      <div className="another-hero-overlay">
        <div className="another-hero-content">
          <h1 className="another-hero-title">
            Welcome to <span className="highlight-text">Your Future</span>
          </h1>
          <p className="another-hero-subtitle">
            Discover endless possibilities with our unique solutions.
          </p>
          <a href="#cta" className="another-hero-btn">
            Get Started
          </a>
        </div>
      </div>

      {/* 3D Models Section */}
      <div className="three-d-canvas-container">
        <Canvas camera={{ position: [500, 1200, 0], fov: 90}}> {/* Increased the z-axis and y-axis position */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <FlyingModel path={require('../assets/models/house3d.obj')} position={[-4, 0, 0]} rotationSpeed={0.01} />
            <FlyingModel path={require('../assets/models/apartment3d.obj')} position={[0, 0, 0]} rotationSpeed={-0.015} />
            <FlyingModel path={require('../assets/models/apartment3d.obj')} position={[4, 0, 0]} rotationSpeed={0.02} />
          </Suspense>
          <OrbitControls enableZoom={true} /> {/* Allows user interaction */}
        </Canvas>
      </div>
    </section>
  );
};

export default AnotherHeroSection;
