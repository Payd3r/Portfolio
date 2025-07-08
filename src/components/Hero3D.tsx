/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerformanceMonitor } from '@react-three/drei'
import { Mesh } from 'three'

const SpinningBox = () => {
  const meshRef = useRef<Mesh>(null!)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    // @ts-ignore
    <mesh ref={meshRef} scale={1.5}>
      {/* @ts-ignore */}
      <boxGeometry args={[1, 1, 1]} />
      {/* @ts-ignore */}
      <meshStandardMaterial
        color="#8A2BE2"
        emissive="#8A2BE2"
        emissiveIntensity={0.2}
        wireframe
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

const Hero3D = () => {
  const [perfDeclined, setPerfDeclined] = useState(false)

  if (perfDeclined) {
    return (
      <div className="absolute top-0 -z-10 w-full h-full bg-gradient-to-br from-dark-base/50 to-neon-purple/10" />
    )
  }

  return (
    <div className="absolute top-0 -z-10 w-full h-full">
      <Canvas
        camera={{ fov: 45, position: [0, 0, 5] }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <PerformanceMonitor
          onDecline={() => setPerfDeclined(true)}
          onChange={({ factor }) => {
            if (factor < 0.8) {
              setPerfDeclined(true)
            }
          }}
        />
        {/* @ts-ignore */}
        <ambientLight intensity={0.5} />
        {/* @ts-ignore */}
        <pointLight position={[10, 10, 10]} color="#00FFFF" intensity={1} />
        {/* @ts-ignore */}
        <pointLight position={[-10, -10, -10]} color="#FF1493" intensity={1} />
        <SpinningBox />
      </Canvas>
    </div>
  )
}

export default Hero3D
