'use client';

import React from "react";

import {RepeatWrapping, TextureLoader} from "three";
import {useLoader} from "@react-three/fiber";
import {usePlane} from "@react-three/cannon";



const Plane = () => {
    const planeWidth = 180*24;
    const planeHeight = 180*24;
    const planeTileSize = 32;

    const [planeRef]: any = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, 0, 0]
    }));

    const textureBase = useLoader(TextureLoader, 'textures/tile_wall_base.jpg');
    textureBase.wrapS = textureBase.wrapT = RepeatWrapping;
    textureBase.repeat.set(
        planeWidth / planeTileSize,
        planeHeight / planeTileSize,
    );
    textureBase.anisotropy = 16;
    // textureBase.encoding = sRGBEncoding;

    const textureNormal = useLoader(TextureLoader, 'textures/tile_wall_normal.jpg');
    textureNormal.wrapS = textureNormal.wrapT = RepeatWrapping;
    textureNormal.repeat.set(
        planeWidth / planeTileSize,
        planeHeight / planeTileSize,
    );
    textureNormal.anisotropy = 16;

    // const textureBump = useLoader(TextureLoader, 'textures/tile_wall_normal.jpg');
    // textureBump.wrapS = textureBump.wrapT = RepeatWrapping;
    // textureBump.repeat.set(
    //     planeWidth / planeTileSize,
    //     planeHeight / planeTileSize,
    // );
    // textureBump.anisotropy = 16;

    return (
        <mesh ref={planeRef}
              castShadow={false}
              receiveShadow={true}
        >
            <planeGeometry args={[planeWidth, planeHeight]} />
            <meshStandardMaterial
                map={textureBase}
                normalMap={textureNormal}
                // displacementMap={textureBump}
            />
        </mesh>
    );
}

export default Plane;
