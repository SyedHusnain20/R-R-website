"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GlobeContent() {
  const globeRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const lineRef = useRef<THREE.LineSegments>(null);
  const orbitalRef = useRef<THREE.Group>(null);

  // Track mouse coordinates for interactive tilt
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate points on a sphere
  const { positions, linesGeometry } = useMemo(() => {
    const pointCount = 200;
    const r = 2.2;
    const pos = new Float32Array(pointCount * 3);
    const lineIndices: number[] = [];

    for (let i = 0; i < pointCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }

    // Connect points that are close to each other
    for (let i = 0; i < pointCount; i++) {
      const p1 = new THREE.Vector3(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
      let connections = 0;
      for (let j = i + 1; j < pointCount; j++) {
        const p2 = new THREE.Vector3(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
        const dist = p1.distanceTo(p2);
        if (dist < 0.95 && connections < 3) {
          lineIndices.push(i, j);
          connections++;
        }
      }
    }

    const linesGeom = new THREE.BufferGeometry();
    linesGeom.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    linesGeom.setIndex(lineIndices);

    return { positions: pos, linesGeometry: linesGeom };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Rotate components
    if (globeRef.current) {
      globeRef.current.rotation.y = time * 0.05;
      globeRef.current.rotation.x = time * 0.02;

      // Mouse tilt logic
      globeRef.current.rotation.y += (mouse.current.x * 0.2 - globeRef.current.rotation.y) * 0.05;
      globeRef.current.rotation.x += (-mouse.current.y * 0.2 - globeRef.current.rotation.x) * 0.05;
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y = -time * 0.02;
    }

    if (orbitalRef.current) {
      orbitalRef.current.rotation.z = time * 0.1;
      orbitalRef.current.rotation.x = Math.sin(time * 0.05) * 0.2;
    }
  });

  return (
    <group ref={globeRef}>
      {/* Outer Point Cloud */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#69d8d0"
          size={0.06}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.8}
        />
      </points>

      {/* Network Connections */}
      <lineSegments ref={lineRef} geometry={linesGeometry}>
        <lineBasicMaterial
          color="#69d8d0"
          transparent={true}
          opacity={0.25}
          linewidth={1}
        />
      </lineSegments>

      {/* Core Glowing Mesh */}
      <mesh>
        <sphereGeometry args={[2.0, 16, 16]} />
        <meshBasicMaterial
          color="#159a93"
          wireframe={true}
          transparent={true}
          opacity={0.08}
        />
      </mesh>

      {/* Orbit Rings representing satellites */}
      <group ref={orbitalRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.5, 2.52, 64]} />
          <meshBasicMaterial
            color="#fbba6b"
            side={THREE.DoubleSide}
            transparent={true}
            opacity={0.2}
          />
        </mesh>
        {/* Small satellite indicator */}
        <mesh position={[2.51, 0, 0]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color="#fbba6b" />
        </mesh>
      </group>
    </group>
  );
}

export default function NetworkGlobe() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#69d8d0" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#fbba6b" />
        <GlobeContent />
      </Canvas>
    </div>
  );
}
