import './App.css';
import { Canvas} from "react-three-fiber";
function App() {
  
  return <div>
    <Canvas amera={{fov: 45, near: 0.1, far: 2000 }}>
       <mesh
      {
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>

    </Canvas>
  </div>;
}


export default App;
