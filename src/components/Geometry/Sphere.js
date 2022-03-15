import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";

const AnimatedSphere = () => {
  const distortionRef = useRef();
  const distortHandler = (obj) => {
    obj.current._distort.value = 0.8;
    const prevDistortionValue = () => {
      obj.current._distort.value--;
    };
    setTimeout(prevDistortionValue, 4500);
    clearTimeout(prevDistortionValue);
  };
  return (
    <Sphere
      visible
      args={[1, 100, 200]}
      scale={2}
      onClick={() => distortHandler(distortionRef)}
    >
      {/* args take radius, width, height */}
      <MeshDistortMaterial
        color="#8352FD"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={3}
        ref={distortionRef}
      />
    </Sphere>
  );
};

export { AnimatedSphere };
