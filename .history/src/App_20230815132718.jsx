


/* eslint-disable react/no-unknown-property */
import { ContactShadows, Float,OrbitControls, PresentationControls,Text,useGLTF,Html
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

   const donut = useGLTF(
   "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/donut-sprinkles/model.gltf"
   );

  return(
  
    <div>
     <Canvas amera={{fov: 45, near: 0.1, far: 2000,position:[0,0,5] }}>
       <color args={["red"]} attach="background"/>
       {/* <OrbitControls /> */}
       <ambientLight />
       <directionalLight intensity={5.4}/>

       {/*  <mesh>
      
       <boxGeometry  />
       <meshStandardMaterial />
    
      </mesh> */}
   <PresentationControls 
    global 
    config={{mass: 2, tention:400}}
    snap={{mass: 4, tention:300}}
  >
     <Float rotationIntensity={1.5}>
    <rectAreaLight 
    color={"#0021a7"} 
    intensity={50}
     rotation={[0.1,Math.pi,0]}
     width={2.0}
     height={1.65}
     position={[0,0,-1]}

    />
     <primitive object={macbook.scene} position={[0,-1.5,0]}> 

     <Html 
      position={[0,1.56,-1.4]}
      distanceFactor={1.17}
      rotation-x={-0.256}
      transform
      wrapperClass='htmlscreen'
      >
       <iframe src="https://www.yaokin.com/" 
       frameborder="0"
       >

       </iframe>
      </Html>
     
     </primitive>
    </Float>

     <Float rotationIntensity={1.5}>
   <rectAreaLight 
   color={"#0021a7"} intensity={50} rotation={[0.1,Math.pi,0]}
    />
    <primitive object={Coffee.scene} 
    position={[-2.4,-1.3,0.2]}
    scale={[2,2,2]}
    >

   </primitive>
    </Float>
    <Float rotationIntensity={1.5}>
   <rectAreaLight 
   color={"#0021a7"} intensity={50} rotation={[0.1,Math.pi,0]}
    />
    <primitive object={donut.scene} 
    position={[2.4,-1.3,0.2]}
    scale={[3,3,3]}
    rotation-x={0.4}
    >

   </primitive>
    </Float>

    
    <Text  font="/RobotoSlab-Bold.ttf"  fontSize={0.6} position={[0,1.725,0.7]}>teru-code11.02</Text>

      
    
    
   </PresentationControls>

   <ContactShadows scale={7} blur={2.4} opacity={0.7} position-y={-2.0}/>
    </Canvas>
    </div>
  );
}


export default App;
