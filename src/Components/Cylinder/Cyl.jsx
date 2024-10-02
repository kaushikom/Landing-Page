import { useTexture } from '@react-three/drei'
import * as THREE from "three"
import React, { useRef } from 'react'
import Logo from './test.png'
import { useFrame } from '@react-three/fiber'

const Cyl = () => {
    let tex = useTexture(Logo)
    let cyl = useRef(null);
    useFrame((state,delta)=>{
        cyl.current.rotation.y += delta * 0.5;
    })
  return (
    <mesh ref={cyl}>
            <cylinderGeometry args={[2, 2, 2, 30, 1, true]}/>
            <meshStandardMaterial map={tex} transparent  side={THREE.DoubleSide} />
        </mesh>
  )
}

export default Cyl