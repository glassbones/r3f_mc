import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "react-three-fiber";
import { useGLTF } from "@react-three/drei/useGLTF";
import { useSpring, a } from "react-spring/three";

//sound
import soundOpen from "../../assets/sounds/open-chest.mp3"
import soundClose from "../../assets/sounds/close-chest.mp3"
const openChestSound = new Audio(soundOpen)
const closeChestSound = new Audio(soundClose)

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "../../../coffre-minecraft.glb"
  );

  const handleOpen =()=> {
    props.setIsOpen(!props.isOpen)
    openChestSound.volume = 0.3
    closeChestSound.volume = 0.3
    !props.isOpen 
    ? openChestSound.play() 
    : closeChestSound.play()
  }
  const chestAnimation = useSpring({
    rotation: props.isOpen ? [0,0,0] : [1.61,0,0],
    position: props.isOpen ? [0,-1.5,0] : [0,0,0],
  })
 
  return (
    <group onClick={handleOpen} ref={group} {...props} dispose={null}>
      <a.group rotation={chestAnimation.position} position={[0, -0.99, 0]} >
        <primitive object={nodes.Bone} />
        <a.primitive  
          rotation={chestAnimation.rotation}
          object={nodes.Bone001} />
        <skinnedMesh
          castShadow
          receiveShadow
          material={materials.Material}
          geometry={nodes.Cube.geometry}
          skeleton={nodes.Cube.skeleton}
        />
      </a.group>
    </group>
  );
}

useGLTF.preload("../../../coffre-minecraft.glb");