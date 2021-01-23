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
import { softShadows, Loader, OrbitControls} from "@react-three/drei";
import {StandardEffects} from "drei"
import { useThree } from "react-three-fiber"
import { useSpring } from "react-spring";

softShadows()

//zoom onLoad
const CustomOrbitControls =()=> {
  const {gl, camera} = useThree()
  useSpring({
    from:{ z:30 },
    x: -5,
    y: 4,
    z: 4,
    onFrame:({x,y,z}) => {
      camera.position.x = x
      camera.position.y = y
      camera.position.z = z
    }
  })
  return (
    <OrbitControls
      enableZoom = {false}
      enablePan = {false}
      target = {[0,0,0]}
      args = {[camera, gl.domElement]}
    />
  )
}

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

          <CustomOrbitControls/>
        </Suspense>
      </Canvas>
      <Loader/>
    </>
  );
}
