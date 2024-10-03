// import { useTexture } from '@react-three/drei'
// import * as THREE from "three"
// import React, { useRef } from 'react'
// import Logo from './test.png'
// import { useFrame } from '@react-three/fiber'

// const Cyl = () => {
//     let tex = useTexture(Logo);
//      tex.anisotropy = 16;
//     let cyl = useRef(null);
//     useFrame((state,delta)=>{
//         cyl.current.rotation.y += delta * 0.24;
//     })
//   return (
//     <mesh ref={cyl}>
//             <cylinderGeometry args={[2, 2, 2, 6, 1, true]}/>
//             <meshBasicMaterial map={tex} transparent  side={THREE.DoubleSide} />
//         </mesh>
//   )
// }

// export default Cyl
import { useTexture } from '@react-three/drei'
import * as THREE from "three"
import React, { useRef } from 'react'
import Logo from './test.png'
import { useFrame } from '@react-three/fiber'

// Custom shader to increase saturation and handle transparency
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform sampler2D map;
  varying vec2 vUv;
  uniform float saturation;

  vec3 increaseSaturation(vec3 color, float sat) {
    float luminance = dot(color, vec3(0.2126, 0.7152, 0.0722)); // Calculate luminance
    return mix(vec3(luminance), color, sat); // Mix based on saturation value
  }

  void main() {
    vec4 color = texture2D(map, vUv);

    // Respect alpha (transparency)
    if (color.a < 0.1) discard;

    color.rgb = increaseSaturation(color.rgb, saturation); // Increase saturation
    gl_FragColor = vec4(color.rgb, color.a); // Preserve original alpha
  }
`

const Cyl = () => {
    let tex = useTexture(Logo);
    tex.anisotropy = 16;
    let cyl = useRef(null);

    useFrame((state, delta) => {
        cyl.current.rotation.y += delta * 0.24;
    });

    return (
      <mesh ref={cyl}>
        <cylinderGeometry args={[2, 2, 2, 6, 1, true]} />
        <shaderMaterial
          uniforms={{
            map: { value: tex },
            saturation: { value: 2.0 } // Adjust this to change saturation
          }}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
    );
}

export default Cyl;
