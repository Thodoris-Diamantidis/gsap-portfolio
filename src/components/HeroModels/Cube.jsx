import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import {Rubiks_cube} from "@/components/HeroModels/Rubiks_cube.jsx";

const Cube = () => {

    const isTablet = useMediaQuery({query: "(max-width:1024px)" });
    const isMobile = useMediaQuery({query: "(max-width:768px)" });
    return (
        <Canvas camera={{position: [0, 0, 1], fov: 3}}>
            {/* Soft base light so blacks aren't crushed */}
            <ambientLight intensity={0.2} />

            {/* Key light */}
            <directionalLight position={[5, 5, 5]} intensity={4.5} />

            {/* Fill light (opposite side, but weaker) */}
            <directionalLight position={[-5, -5, -5]} intensity={1.2} />

            {/*rim light*/}
            <directionalLight position={[0, 6, -6]} intensity={1.0} />

            <OrbitControls
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}/>

            <Rubiks_cube rotation={[-0.35, Math.PI /4, 0]}/>
        </Canvas>
    )
}
export default Cube
