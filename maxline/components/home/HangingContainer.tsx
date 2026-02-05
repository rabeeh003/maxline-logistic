"use client";

import { useRef } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Rope({ x = 0, z = 0 }: { x?: number; z?: number }) {
    return (
        <mesh position={[x, 1.5, z]}>
            <cylinderGeometry args={[0.02, 0.02, 3]} />
            <meshStandardMaterial color="#9ca3af" />
        </mesh>
    );
}

function ContainerModel() {
    const containerRef = useRef<THREE.Group>(null);

    // Subtle swing animation
    useFrame(({ clock }) => {
        if (containerRef.current) {
            // Swing only if not being dragged (optional, but user didn't specify, so I'll keep it simple)
            // User code:
            containerRef.current.rotation.z = Math.sin(clock.elapsedTime) * 0.05;
        }
    });

    const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
        if (e.buttons === 1 && containerRef.current) {
            // e.movementX/Y might be on nativeEvent
            const movementX = e.movementX ?? (e.nativeEvent as any).movementX ?? 0;
            const movementY = e.movementY ?? (e.nativeEvent as any).movementY ?? 0;

            containerRef.current.rotation.y += movementX * 0.002;
            containerRef.current.rotation.x += movementY * 0.002;
        }
    };

    return (
        <group ref={containerRef} position={[0, 0, 0]}>
            {/* Container Box */}
            <mesh
                onPointerDown={(e) => {
                    e.stopPropagation();
                    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
                }}
                onPointerUp={(e) => {
                    e.stopPropagation();
                    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
                }}
                onPointerMove={handlePointerMove}
                onPointerOver={() => (document.body.style.cursor = "grab")}
                onPointerOut={() => (document.body.style.cursor = "auto")}
            >
                <boxGeometry args={[2.5, 1.2, 1.2]} />
                <meshStandardMaterial color="#1f2937" />
            </mesh>

            {/* Ropes */}
            <Rope x={1.2} />
            <Rope x={-1.2} />
            <Rope x={1.2} z={0.6} />
            <Rope x={-1.2} z={0.6} />
        </group>
    );
}

export default function HangingContainer() {
    return (
        <Canvas
            camera={{ position: [0, 1.5, 4], fov: 45 }}
            // Disable background color here to let CSS handle it
            style={{ pointerEvents: 'none' }} // Canvas itself shouldn't block, but OrbitControls might need events. Check user requirement "3D is decorative, not blocking content".
            // But user also wants "Drag Interaction". So events MUST be enabled on Canvas.
            // So pointer-events-auto is needed on the container div in parent.
            className="touch-none"
        >
            {/* Lights */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[3, 5, 3]} intensity={1} />

            {/* Background light */}
            <Environment preset="warehouse" />

            {/* 3D Model */}
            <ContainerModel />

            {/* Disable zoom for UX */}
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
}
