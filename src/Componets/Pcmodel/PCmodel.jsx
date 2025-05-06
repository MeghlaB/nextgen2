// Inside a component like PCModel.jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Box() {
  return (
    <mesh rotation={[10, 10, 0]}>
      <boxGeometry args={[2, 1, 1]} />
      <meshStandardMaterial color="#f97316" />
    </mesh>
  );
}

export default function PCModel() {
  return (
    <div className="w-full h-[400px]">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} />
        <Box />
      </Canvas>
    </div>
  );
}
