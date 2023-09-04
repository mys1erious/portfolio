'use client';

import React from "react";

import {useFBX} from "@react-three/drei";
import {Box3, Vector3} from "three";


type MannequinProps = {
    position?: [x: number, y: number, z: number],
    rotation?: [x: number, y: number, z: number],
};


// 178 width
// 176 height
// 28 depth
const Mannequin = ({position, rotation}: MannequinProps) => {
    const fbx = useFBX('models/mannequin/mannequin.fbx');

    // size's x, y, z are width, height, depth.
    const box3 = new Box3().setFromObject(fbx);
    const size = new Vector3();

    return (
        <mesh position={position} rotation={rotation}>
            <primitive object={fbx} />
        </mesh>
    );
}


export default Mannequin;
