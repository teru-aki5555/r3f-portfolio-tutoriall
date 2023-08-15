

/* eslint-disable react/no-unknown-property */
import { OrbitControls, PresentationControls, useGLTF } from '@react-three/drei';
import './App.css';
import { Canvas} from "react-three-fiber";
function App() {
  const macbook = useGLTF(
   "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"

  );

  return(
  <div>

    <Canvas amera={{fov: 45, near: 0.1, far: 2000 }}>
      <color args={["red"]} attach="background"/>
      {/* <OrbitControls /> */}
      <ambientLight />
      {/*  <mesh>
      
      <boxGeometry  />
      <meshStandardMaterial />
    
  </mesh> */}
  <PresentationControls  global config={{mass: 2, tention:400}}snap={mass:4,tention}>
  <rectAreaLight 
  color={"#0021a7"} intensity={50} rotation={[0.1,Math.pi,0]
  }/>
 <primitive object={macbook.scene} position={[0,-1.5,0]}> 
 </primitive>
</PresentationControls>
  



    </Canvas>
  </div>
  );
}


export default App;
