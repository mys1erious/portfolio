'use client';

import React from "react";

import {Color} from "three";
import {Canvas as BaseCanvas} from "@react-three/fiber";
import {OrbitControls, Stats} from "@react-three/drei";
import {Physics} from "@react-three/cannon";
import {Perf} from 'r3f-perf';

import AmbientLight from "@/features/environment/components/AmbientLight";
import DirectionalLight from "@/features/environment/components/DirectionalLight";

const fov = 60;
const aspect = 1920 / 1080;


type canvasProps = {
    children?: React.ReactNode,
};


const Canvas = ({children}: canvasProps) => {
    return (
        <BaseCanvas
            shadows={true}
            camera={{
                fov: fov, aspect: aspect,
                near: 1.0, far: 10000.0,
                position: [-10, 420, -400]
            }}
            onCreated={({scene}) => (scene.background = new Color('lightblue'))}
        >
            <AmbientLight/>
            <DirectionalLight/>
            <OrbitControls/>

            <Physics gravity={[0, -40, 0]}>
                {children}
            </Physics>

            <Perf />
            <Stats/>
        </BaseCanvas>
    );
};


export default Canvas;
