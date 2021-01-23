import React, { useState } from "react";
//styles
import "./assets/styles/App.scss";
//three
import { Canvas } from "react-three-fiber"
// Model
import Model from './components/Three/mcChest'
import Lights from './components/Three/lights'
import Ground from './components/Three/ground'
import { Suspense } from "react";
import { softShadows } from "@react-three/drei";

softShadows()

export default function App() {
const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Canvas
        colorManagement
        shadowMap
        camera={{position: [-5,4,4], fov:40}}>
        <Lights/>
        <Suspense fallback={null}>
          <Model isOpen={isOpen} setIsOpen={setIsOpen}/>
          <Ground/>
        </Suspense>
      </Canvas>
    </>
  );
}
