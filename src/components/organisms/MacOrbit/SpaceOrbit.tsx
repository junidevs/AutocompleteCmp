"use client"
import {
  OrbitControls,
  PerspectiveCamera,
  Stars,
  useGLTF
} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React, { Suspense } from "react"
import { Mesh } from "three"

const Model = ({ url }: { url: string }) => {
  const { nodes } = useGLTF(url)

  const planet002 = nodes.planet002 as Mesh
  const planet003 = nodes.planet003 as Mesh

  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -7, 0]} scale={7}>
      <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh
          receiveShadow
          castShadow
          geometry={planet002.geometry}
          material={planet002.material}
        />
        <mesh geometry={planet003.geometry} material={planet003.material} />
      </group>
    </group>
  )
}

const SpaceOrbit = () => (
  <Suspense fallback={<>Loading..</>}>
    <Canvas dpr={[1.5, 2]} linear shadows>
      <fog attach="fog" args={["#272730", 16, 30]} />
      <ambientLight intensity={2.25} />
      <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
        <pointLight intensity={1} position={[-10, -25, -10]} />
        <spotLight
          castShadow
          intensity={2.25}
          angle={0.2}
          penumbra={0}
          position={[-25, 20, -15]}
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />
      </PerspectiveCamera>
      <Suspense fallback={<>Loading..</>}>
        <Model url="/scene.glb" />
      </Suspense>
      <OrbitControls
        autoRotate
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Stars radius={500} depth={50} count={1000} factor={10} />
    </Canvas>
  </Suspense>
)

export default SpaceOrbit
