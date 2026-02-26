import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Rubiks_cube(props) {
  const { nodes, materials } = useGLTF('/models/rubiks_cube.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.154}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.RubixCube_RubixCube_0.geometry} material={materials.RubixCube} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/rubiks_cube.glb')
