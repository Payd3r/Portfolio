import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerformanceMonitor } from '@react-three/drei'
import { Mesh } from 'three'

// Workaround for TypeScript linter errors
const MeshComponent = 'mesh' as any
const BoxGeometryComponent = 'boxGeometry' as any
const MeshStandardMaterialComponent = 'meshStandardMaterial' as any
const AmbientLightComponent = 'ambientLight' as any
const PointLightComponent = 'pointLight' as any

const SpinningBox = () => {
  const meshRef = useRef<Mesh>(null!)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <MeshComponent ref={meshRef} scale={1.5}>
      <BoxGeometryComponent args={[1, 1, 1]} />
      <MeshStandardMaterialComponent
        color="#8A2BE2"
        emissive="#8A2BE2"
        emissiveIntensity={2}
        wireframe
      />
    </MeshComponent>
  )
}

const Hero3D = () => {
  const [perfDeclined, setPerfDeclined] = useState(false)

  if (perfDeclined) {
    return (
      <div className="absolute top-0 -z-10 w-full h-full bg-dark-base opacity-50" />
    )
  }

  return (
    <div className="absolute top-0 -z-10 w-full h-full opacity-50">
      <Canvas camera={{ fov: 45, position: [0, 0, 5] }}>
        <PerformanceMonitor onDecline={() => setPerfDeclined(true)} />
        <AmbientLightComponent intensity={0.5} />
        <PointLightComponent position={[10, 10, 10]} color="#00FFFF" intensity={100} />
        <PointLightComponent
          position={[-10, -10, -10]}
          color="#FF1493"
          intensity={100}
        />
        <SpinningBox />
      </Canvas>
    </div>
  )
}

export default Hero3D 