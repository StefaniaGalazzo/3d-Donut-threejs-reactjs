import styled from "styled-components";
import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import { Html } from "@react-three/drei";
import { TorusObj } from "./components/Geometry/Torus.js";

function App() {
  useEffect(() => {
    // console.log(controlRotatonRef.current);
  }, []);
  return (
    <Wrapper className="App">
      <Canvas className="canvas">
        {/* <OrbitControls
          ref={controlRotatonRef}
          enableZoom={false}
          autoRotate={true}
          // maxAzimuthAngle={Math.PI / 1.5}
          // minAzimuthAngle={-Math.PI / 1.5}
        /> */}
        {/* {console.log(controlRotatonRef.current)} */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[-5, 5, 2]} intensity={0.3} />
        <pointLight position={[15, 20, 2]} intensity={0.8} />
        <Suspense fallback={null}>
          <TorusObj />
        </Suspense>
        <Html>
          <Texts>
            <h2>I'M HERE.</h2>
            <h3>ALWAYS. ONLY FOR YOU!</h3>
            <p>Sometimes all you need is comfort food.</p>
            <Line />
          </Texts>
        </Html>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  color: white;
  background: linear-gradient(180deg, #eeb3ff 6.33%, #91abfa 80%);
  padding-bottom: 100px;
  canvas {
    height: 600px;
  }
`;

const Texts = styled.div`
  width: 800px;
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 407px);
  text-shadow: 22px 22px 160px black;

  h2 {
    font-size: 80px;
    letter-spacing: 2px;
    line-height: 80px;
  }
  h3 {
    font-size: 26px;
    letter-spacing: 1.8px;
  }
  p {
    font-size: 15px;
    letter-spacing: 1.3px;
  }
`;

const Line = styled.div`
  width: 360px;
  margin-top: 20px;
  border-bottom: 18px solid white;
`;
export default App;
