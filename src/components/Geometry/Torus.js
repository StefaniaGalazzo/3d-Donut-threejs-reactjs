import { Torus } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader, useFrame } from "@react-three/fiber";
import texture from "./../../img/texture-4.png";
import { useRef } from "react";

const TorusObj = () => {
  const donut = useLoader(TextureLoader, texture);
  const rotationRef = useRef();

  let mouseX = 0;
  let mouseY = 0;

  let targetX = 0;
  let targetY = 0;

  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  const onMouseMove = (e) => {
    mouseX = e.clientX - windowHalfX;
    mouseY = e.clientY - windowHalfY;
    // console.log(e);
  };

  useFrame(({ clock }) => {
    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;

    const elapsedTime = clock.getElapsedTime();

    rotationRef.current.rotation.x = 0.00005 * elapsedTime;

    rotationRef.current.rotation.y +=
      0.05 * (targetX - rotationRef.current.rotation.x);

    rotationRef.current.rotation.x +=
      0.05 * (targetY - rotationRef.current.rotation.x);

    rotationRef.current.rotation.z +=
      0.05 * (targetY - rotationRef.current.rotation.x);
  });

  return (
    <mesh ref={rotationRef} onPointerMove={onMouseMove}>
      {/* {console.log(rotationRef.current)} */}
      <Torus
        // rotation={[80, 10, 30]}
        visible
        args={[10, 5, 24, 100, 6.29]}
        scale={0.15}
      >
        {/* <meshLambertMaterial attach="material" color="#8352FD" /> */}
        <meshStandardMaterial map={donut} />
      </Torus>
    </mesh>
  );
};

export { TorusObj };
