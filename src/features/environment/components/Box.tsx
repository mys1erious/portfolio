'use client';

import React, {useImperativeHandle} from "react";
import {useBox} from "@react-three/cannon";


type BoxProps = {
    width?: number,
    height?: number,
    depth?: number,
    position?: [x: number, y: number, z: number],
    scale?: [x: number, y: number, z: number],
    color?: string,
    onClick?: () => void
};


// const Box = ({width=1, height=1, depth=1, position, scale, color="red"}: BoxProps) => {
const Box = React.forwardRef((
    {width=1, height=1, depth=1, position, scale, color="red"}: BoxProps,
    forwardedRef
) => {
    if (scale) {
        width *= scale[0];
        height *= scale[1];
        depth *= scale[2];
    }
    const mass = (width + height + depth) / 3;

    const [boxRef]: any = useBox(() => ({
        args: [width, height, depth],
        mass: mass,
        position: position,
    }));

    useImperativeHandle(forwardedRef, () => ({
        ...boxRef.current,
    }));

    return (
        <mesh ref={boxRef} position={position}>
            <boxGeometry args={[width, height, depth]}/>
            <meshPhysicalMaterial color={color}/>
        </mesh>
    );
});

export default Box;
