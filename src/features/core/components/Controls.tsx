'use client';

import React from "react";
import { extend, useThree } from "@react-three/fiber";
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";


extend({ OrbitControls });


const Controls = () => {
    const { camera, gl } = useThree();
    return (
        <orbitControls attach={"orbitControls"}  args={[camera, gl.domElement]} />
    );
};


export default Controls;
