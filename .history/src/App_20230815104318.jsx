

/* eslint-disable react/no-unknown-property */
import { Float, OrbitControls, PresentationControls, useGLTF 
} from '@react-three/drei';
import './App.css';
import { Canvas} from "react-three-fiber";
function App() {
  const macbook = useGLTF(
   "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
   const Coffee = useGLTF(
   "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cup-tea/model.gltf"
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
   <PresentationControls 
    global 
    config={{mass: 2, tention:400}}
    snap={{mass: 4, tention:300}}
  >
     <Float rotationIntensity={5}>
    <rectAreaLight 
    color={"#0021a7"} 
    intensity={50}
     rotation={[0.1,Math.pi,0]}
     width={2.0}
     height={1.65}
     pos

    }/>
     <primitive object={macbook.scene} position={[0,-1.5,0]}> 
     </primitive>
    </Float>

     <Float rotationIntensity={5}>
   <rectAreaLight 
   color={"#0021a7"} intensity={50} rotation={[0.1,Math.pi,0]}
    />
    <primitive object={Cofee.scene} position={[0,-1.5,0]}>
   </primitive>
    </Float>
   </PresentationControls>
    </Canvas>
    </div>
  );
}


export default App;
