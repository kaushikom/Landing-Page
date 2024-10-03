import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Cyl from './Cyl.jsx'


const Scene = () => {
 
  return (
    <Canvas gl={{ antialias: true, samples: 4 }} camera={{fov : 40}}>
        <OrbitControls enableZoom={false} />
        <Cyl/>
    </Canvas>
  )
}

export default Scene