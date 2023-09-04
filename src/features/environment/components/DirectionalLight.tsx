'use client';

import React from "react";


const DirectionalLight = () => {
    return (
        <mesh position={[500, 1000, -500]}>
            <directionalLight
                color="white" intensity={1}
                target-position={[0, 0, 0]}
                castShadow={true}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            >
                <orthographicCamera
                    attach="shadow-camera"
                    near={1.0} far={500}
                    left={200} right={-200}
                    top={200} bottom={-200}
                />
            </directionalLight>

            {/* To see where the Light is */}
            <mesh scale={[50, 50, 50]}>
                <sphereGeometry args={[0.2, 30, 10]} />
                <meshStandardMaterial color="yellow" />
            </mesh>
        </mesh>
    )
};

export default DirectionalLight;
