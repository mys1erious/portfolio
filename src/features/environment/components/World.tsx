'use client';

import React, {useRef} from "react";
import Plane from "@/features/environment/components/Plane";
import Wall from "@/features/environment/components/Wall";
import Box from "@/features/environment/components/Box";
import Mannequin from "@/features/characters/components/Mannequin";
import Canvas from "@/features/core/components/Canvas";
import UI from "@/features/core/components/UI";


type WorldProps = {
    children?: React.ReactNode
}


const World = ({children}: WorldProps) => {
    const boxUpRef = useRef(null);

    return (
        <>
        <UI boxRef={boxUpRef}/>
        <Canvas>
            <Plane/>
            <Wall width={180} height={176 * 1.3} depth={1}
                  position={[10, 110, 10]}
                  rotation={[0, 0, 0]}/>
            <Wall width={180} height={176 * 1.3} depth={1}
                  position={[-300, 110, -100]}
                  rotation={[0, .5 * Math.PI, 0]}/>

            <Box ref={boxUpRef} position={[10, 100, 100]} scale={[40, 40, 40]}/>
            <Box position={[10, 20, 80]} scale={[40, 40, 40]}/>

            <Mannequin position={[0, -1, -150]}/>
        </Canvas>
        </>
    );
};


export default World;
