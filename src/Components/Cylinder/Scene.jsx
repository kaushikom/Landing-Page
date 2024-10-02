import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Cyl from './Cyl.jsx'

const CustomCard = ({ title, description, position, rotation }) => (
  <Html position={position} rotation={rotation} transform occlude>
    <div className="w-48 p-4 bg-white rounded shadow-lg">
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  </Html>
)

const Scene = () => {
 
  return (
    <Canvas camera={{fov : 50}}>
        <OrbitControls enableZoom={false} />
        <ambientLight />
        <Cyl/>
          
    </Canvas>
  )
}

export default Scene