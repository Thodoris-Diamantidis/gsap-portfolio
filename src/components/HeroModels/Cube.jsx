import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {Rubiks_cube} from "@/components/HeroModels/Rubiks_cube.jsx";

// OrbitControls sets `touch-action: none` on the canvas, which blocks page scrolling on touch screens,
// so drag-to-rotate is only enabled for mouse/trackpad users.
const canDragToRotate = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const Cube = () => {
    return (
        <Canvas camera={{position: [0, 0, 5], fov: 3}}>
            {/* Soft base light so blacks aren't crushed */}
            <ambientLight intensity={0.2} />

            {/* Key light */}
            <directionalLight position={[5, 5, 5]} intensity={4.5} />

            {/* Fill light (opposite side, but weaker) */}
            <directionalLight position={[-5, -5, -5]} intensity={1.2} />

            {/*rim light*/}
            <directionalLight position={[0, 6, -6]} intensity={2.0} />

            {/* Zoom stays off so the mouse wheel scrolls the page instead of getting trapped by the cube */}
            {canDragToRotate && <OrbitControls enablePan={false} enableZoom={false}/>}

            <Rubiks_cube rotation={[-0.35, Math.PI /4, 0]}/>
        </Canvas>
    )
}
export default Cube
