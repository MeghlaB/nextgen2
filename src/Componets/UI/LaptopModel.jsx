// components/UI/LaptopModel.jsx
import { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Import GLTFLoader
import * as THREE from 'three'; // Import THREE for material manipulation

export default function LaptopModel() {
  const gltf = useLoader(GLTFLoader, '/models/leptop.glb'); // Correct path to your .glb file
  const ref = useRef();
  
  // Optional: Rotate the model if needed
  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.y = Math.PI; // Initial rotation (optional)
    }
    
    // Apply orange color to all meshes in the model
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color = new THREE.Color('orange'); // Set the color to orange
      }
    });
  }, [gltf]);

  // Define the desired width and height (in pixels, converted to 3D space scale)
  const width = 200; // Desired width (in pixels)
  const height = 200; // Desired height (in pixels)

  // Adjust the scale based on your model's original dimensions
  const scale = [
    width / 100,  // X-axis scale factor (adjust as needed)
    height / 100, // Y-axis scale factor (adjust as needed)
    0.5,          // Z-axis scale (same as your original scale)
  ];

  return (
    <primitive
      object={gltf.scene} // Use the loaded model
      scale={scale} // Apply dynamic scaling
      ref={ref}
    />
  );
}
