function Box() {
  return (
    <mesh rotation={[90, 0, 20]}>
      {/* //rotate = to rotate the object in the mesh*/}
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      {/* //args = width, height, depth  */}
      <meshNormalMaterial attach="material" color="blue" />
    </mesh>
  );
}

export { Box };
