import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Float } from "@react-three/drei";
import { orbitNodes } from "../data/portfolio";

function CoreShape() {
  const meshRef = useRef();
  const wireRef = useRef();

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta * 0.12;
    meshRef.current.rotation.x += delta * 0.04;
    wireRef.current.rotation.y -= delta * 0.06;
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshBasicMaterial color="#f2a93b" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh ref={wireRef} scale={1.55}>
        <icosahedronGeometry args={[1.35, 0]} />
        <meshBasicMaterial color="#5e8fff" wireframe transparent opacity={0.22} />
      </mesh>
    </group>
  );
}

function OrbitingNode({ label, radius, speed, tilt, offset, color }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    const x = Math.cos(t) * radius;
    const z = Math.sin(t) * radius;
    const y = Math.sin(t * 1.3 + offset) * tilt;
    ref.current.position.set(x, y, z);
  });

  return (
    <group ref={ref}>
      <Float speed={2.4} floatIntensity={0.6} rotationIntensity={0.2}>
        <mesh>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color={color} />
        </mesh>
        <Html center distanceFactor={7} style={{ pointerEvents: "none" }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              color: color,
              background: "rgba(10,12,16,0.75)",
              border: `1px solid ${color}55`,
              borderRadius: "4px",
              padding: "2px 6px",
              whiteSpace: "nowrap",
              transform: "translateY(-22px)",
            }}
          >
            {label}
          </div>
        </Html>
      </Float>
    </group>
  );
}

function Scene() {
  const nodes = useMemo(
    () =>
      orbitNodes.map((label, i) => ({
        label,
        radius: 2.1 + (i % 3) * 0.35,
        speed: 0.18 + (i % 4) * 0.05,
        tilt: 0.6 + (i % 2) * 0.4,
        offset: i * 1.3,
        color: i % 2 === 0 ? "#f2a93b" : "#5e8fff",
      })),
    []
  );

  return (
    <>
      <CoreShape />
      {nodes.map((n) => (
        <OrbitingNode key={n.label} {...n} />
      ))}
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="hero-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} dpr={[1, 1.75]}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
          rotateSpeed={0.5}
        />
      </Canvas>
      <p className="hero-canvas-hint mono">drag to rotate</p>
    </div>
  );
}
