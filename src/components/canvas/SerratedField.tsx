"use client";

import { useMemo, useRef } from "react";
import { Canvas, extend, useFrame, type ThreeElement } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import { fragmentShader, vertexShader } from "./serrated-shader";

const SerratedMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector2(0.5, 0.5),
    uHover: 0,
    uColorBase: new THREE.Vector3(0.04, 0.04, 0.05),
    uColorAccent: new THREE.Vector3(1.0, 0.35, 0.12),
  },
  vertexShader,
  fragmentShader
);

extend({ SerratedMaterial });

declare module "@react-three/fiber" {
  interface ThreeElements {
    serratedMaterial: ThreeElement<typeof SerratedMaterial>;
  }
}

function Field() {
  const materialRef = useRef<InstanceType<typeof SerratedMaterial> | null>(null);
  const mouseTarget = useRef(new THREE.Vector2(0.5, 0.5));
  const hoverTarget = useRef(0);

  useFrame((_state, delta) => {
    const material = materialRef.current;
    if (!material) return;

    material.uTime += delta;
    material.uMouse.lerp(mouseTarget.current, 1 - Math.pow(0.0005, delta));
    material.uHover += (hoverTarget.current - material.uHover) * Math.min(1, delta * 4);
  });

  return (
    <mesh
      rotation={[-0.4, 0, 0]}
      onPointerMove={(event) => {
        if (event.uv) mouseTarget.current.set(event.uv.x, event.uv.y);
        hoverTarget.current = 1;
      }}
      onPointerLeave={() => {
        hoverTarget.current = 0;
      }}
    >
      <planeGeometry args={[7, 4.5, 220, 160]} />
      <serratedMaterial ref={materialRef} />
    </mesh>
  );
}

export function SerratedField() {
  const dpr = useMemo<[number, number]>(() => [1, 1.5], []);

  return (
    <Canvas
      camera={{ position: [0, 1.3, 2.6], fov: 42 }}
      dpr={dpr}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <Field />
    </Canvas>
  );
}
