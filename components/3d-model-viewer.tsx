"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import {
  OrbitControls,
  Environment,
  useGLTF,
  PresentationControls,
  Float,
  Html,
  Text,
  ContactShadows,
  useTexture,
} from "@react-three/drei"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Cpu, CircuitBoardIcon as Circuit, Layers } from "lucide-react"

function Model({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
  const { scene } = useGLTF("/assets/3d/duck.glb")
  const modelRef = useRef()

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return <primitive ref={modelRef} object={scene} position={position} scale={scale} rotation={rotation} />
}

function CircuitBoard({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
  const meshRef = useRef()
  const texture = useTexture("/placeholder.svg?height=512&width=512")

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale} rotation={rotation}>
      <boxGeometry args={[3, 0.1, 3]} />
      <meshStandardMaterial map={texture} color="#4fd1c5" />
    </mesh>
  )
}

function FloatingSkills() {
  const skills = [
    { name: "ESP32", icon: <Cpu className="h-4 w-4 mr-1" /> },
    { name: "STM32", icon: <Circuit className="h-4 w-4 mr-1" /> },
    { name: "FPGA", icon: <Layers className="h-4 w-4 mr-1" /> },
    { name: "Arduino", icon: <Cpu className="h-4 w-4 mr-1" /> },
    { name: "C/C++", icon: <Circuit className="h-4 w-4 mr-1" /> },
  ]

  return (
    <>
      {skills.map((skill, index) => (
        <Float
          key={index}
          speed={1.5}
          rotationIntensity={0.5}
          floatIntensity={2}
          position={[(Math.random() - 0.5) * 8, (Math.random() - 0.5) * 5 + 2, (Math.random() - 0.5) * 8]}
        >
          <Html transform occlude distanceFactor={8} position={[0, 0, 0]} className="pointer-events-none">
            <div className="px-2 py-1 bg-slate-800/90 backdrop-blur-sm rounded-lg border border-cyan-800/50 shadow-lg flex items-center">
              {skill.icon}
              <span className="text-cyan-300 text-sm">{skill.name}</span>
            </div>
          </Html>
        </Float>
      ))}
    </>
  )
}

function AnimatedText() {
  const { viewport } = useThree()
  const textRef = useRef()

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2 + 3
    }
  })

  return (
    <Text
      ref={textRef}
      position={[0, 3, 0]}
      fontSize={viewport.width < 10 ? 0.5 : 0.7}
      color="#4fd1c5"
      anchorX="center"
      anchorY="middle"
      font="/fonts/Inter_Bold.json"
    >
      Embedded Systems & Firmware
    </Text>
  )
}

export default function ModelViewer() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <section id="models" className="py-20 bg-slate-800/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyan-400">3D</span> Showcase
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-8"></div>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Explore my projects in 3D. Drag to rotate, scroll to zoom, and hover over elements to interact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-700/30 dark:bg-slate-800/30 rounded-xl overflow-hidden shadow-xl border border-slate-600/50"
          >
            <div className="h-[400px] md:h-[500px]">
              <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <color attach="background" args={["#0f172a"]} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

                <PresentationControls
                  global
                  zoom={0.8}
                  rotation={[0, 0, 0]}
                  polar={[-Math.PI / 4, Math.PI / 4]}
                  azimuth={[-Math.PI / 4, Math.PI / 4]}
                >
                  <Float rotationIntensity={0.4}>
                    <Model position={[0, -1, 0]} scale={isMobile ? 1.5 : 2} />
                    <AnimatedText />
                    <FloatingSkills />
                  </Float>
                </PresentationControls>

                <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={1} far={5} />

                <Environment preset="city" />
                <OrbitControls
                  enableZoom={true}
                  enablePan={false}
                  minPolarAngle={Math.PI / 6}
                  maxPolarAngle={Math.PI / 2}
                />
              </Canvas>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Interactive 3D Model</h3>
              <p className="text-slate-300 text-sm">Drag to rotate, scroll to zoom</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-700/30 dark:bg-slate-800/30 rounded-xl overflow-hidden shadow-xl border border-slate-600/50"
          >
            <div className="h-[400px] md:h-[500px]">
              <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <color attach="background" args={["#0f172a"]} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

                <PresentationControls
                  global
                  zoom={0.8}
                  rotation={[0, 0, 0]}
                  polar={[-Math.PI / 4, Math.PI / 4]}
                  azimuth={[-Math.PI / 4, Math.PI / 4]}
                >
                  <Float rotationIntensity={0.4}>
                    <CircuitBoard position={[0, -1, 0]} scale={isMobile ? 0.8 : 1} />

                    <Html transform occlude position={[0, 0.5, 0]} distanceFactor={8} className="pointer-events-none">
                      <div className="px-4 py-2 bg-slate-800/90 backdrop-blur-sm rounded-lg border border-cyan-800/50 shadow-lg">
                        <h3 className="text-cyan-300 font-semibold mb-1">PCB Design</h3>
                        <p className="text-slate-300 text-sm">Custom hardware solutions</p>
                      </div>
                    </Html>
                  </Float>
                </PresentationControls>

                <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={1} far={5} />

                <Environment preset="sunset" />
                <OrbitControls
                  enableZoom={true}
                  enablePan={false}
                  minPolarAngle={Math.PI / 6}
                  maxPolarAngle={Math.PI / 2}
                />
              </Canvas>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Circuit Board Design</h3>
              <p className="text-slate-300 text-sm">Custom PCB and hardware solutions</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">View More 3D Models</Button>
        </div>
      </div>
    </section>
  )
}
