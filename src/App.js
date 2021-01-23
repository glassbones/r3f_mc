//styles
import "./assets/styles/App.scss";
//three
import { Canvas } from "react-three-fiber"
// Model
import Model from './components/Three/mcChest'
import Lights from './components/Three/lights'
import { Suspense } from "react";

export default function App() {
  return (
    <>
      <Canvas
        colorManagement
        shadowMap
        camera={{position: [-5,4,4], fov:40}}>
        <Lights/>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
}
