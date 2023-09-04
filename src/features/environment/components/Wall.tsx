'use client';

import React from "react";

import {useBox} from "@react-three/cannon";
import {useLoader} from "@react-three/fiber";
import {RepeatWrapping, TextureLoader} from "three";


type WallProps = {
    width?: number,
    height?: number,
    depth?: number,
    position?: [x: number, y: number, z: number],
    scale?: [x: number, y: number, z: number],
    rotation?: [x: number, y: number, z: number],
    color?: string,
    onClick?: () => void
};


const Wall = ({width=1, height=1, depth=1, position, scale, rotation, color="gray"}: WallProps) => {
    if (scale) {
        width *= scale[0];
        height *= scale[1];
        depth *= scale[2];
    }

    const [boxRef]: any = useBox(() => ({
        args: [width, height, depth],
        mass: 0,
        position: position,
        rotation: rotation
    }));

    const textureBase = useLoader(TextureLoader, 'textures/double_wall_base.jpg');
    // textureBase.wrapS = textureBase.wrapT = RepeatWrapping;
    // textureBase.repeat.set(
    //     planeWidth / planeTileSize,
    //     planeHeight / planeTileSize,
    // );
    // textureBase.anisotropy = 16;
    // // textureBase.encoding = sRGBEncoding;

    const textureNormal = useLoader(TextureLoader, 'textures/double_wall_normal.jpg');
    // textureNormal.wrapS = textureNormal.wrapT = RepeatWrapping;
    // textureNormal.repeat.set(
    //     planeWidth / planeTileSize,
    //     planeHeight / planeTileSize,
    // );
    // textureNormal.anisotropy = 16;

    return (
        <mesh ref={boxRef} position={position} rotation={rotation}>
            <boxGeometry args={[width, height, depth]}/>
            <meshStandardMaterial map={textureBase} normalMap={textureNormal} />
        </mesh>
    );
}

export default Wall;
