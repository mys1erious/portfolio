'use client';

import {Canvas as BaseCanvas} from "@react-three/fiber";
import {Perf} from "r3f-perf";

import Plane from "@/features/environment/components/Plane";
import Controls from "@/features/core/components/Controls";


const MainCanvas = () => {
    return (
        <BaseCanvas className="bg-black" shadows camera={{position: [-6, 7, 7]}}>
            <ambientLight color={"white"} intensity={0.3} />
            <Plane/>

            <Controls/>
            <Perf />
        </BaseCanvas>
    );
};


export default MainCanvas;
