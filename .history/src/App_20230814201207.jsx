/* eslint-disable react/no-unknown-property */
import { OrbitControls } from '@react-three/drei';
import './App.css';
import { Canvas} from "react-three-fiber";
function App() {
  
  return(
  <div>

    <Canvas amera={{fov: 45, near: 0.1, far: 2000 }}>
      <color args={["#000000"]} attach="background"/>
      <OrbitControls />
      <ambientLight />
      {/*  <mesh>
      
      <boxGeometry  />
      <meshStandardMaterial />
    
      </mesh>
    </Canvas>
  </div>
  );
}


export default App;
