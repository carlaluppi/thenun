// import { useRef, useEffect } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
// import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

// const Avedorada = () => {
//     const mountRef = useRef(null);

//     useEffect(() => {
        //Data from the canvas
        const currentRef = mountRef.current;
        const { clientWidth: width, clientHeight: height } = currentRef;

        //Scene, camera, renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(15, width / height, 0.1, 100);
        scene.add(camera);
        camera.position.set(6, 6, 6);
        camera.lookAt(new THREE.Vector3());

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        currentRef.appendChild(renderer.domElement);

        //OrbitControls
        const orbitControls = new OrbitControls(camera, renderer.domElement);
        orbitControls.enableDamping = true;

        //Resize canvas
        const resize = () => {
            renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
            camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener("resize", resize);

        //Loader

        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath("./draco/")

        // const personaje = new THREE.Group();

        // const gltfLoader = new GLTFLoader();
        // gltfLoader.setDRACOLoader();
        // gltfLoader.load("./models/shiba/scene.gltf", (gltf) => {
        //     personaje.add(gltf.scene);
        //     personaje.position.y = 1.7;
        //     personaje.position.x = 1;

        //     scene.add(personaje);
        // }
        // );

        const personaje2 = new THREE.Group();

        const gltfLoader2 = new GLTFLoader();
        gltfLoader2.setDRACOLoader();
        gltfLoader2.load("./src/models/helmet/scene.gltf", (gltf) => {
            personaje2.add(gltf.scene);
            // personaje2.position.y = -0.8;
            // personaje2.position.x = -1;

            scene.add(personaje2);
        }
        );


        //Animate the scene
        const animate = () => {
            orbitControls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        //cube
        // const cube = new THREE.Mesh(
        //       new THREE.BoxBufferGeometry(1, 1, 1),
        //       new THREE.MeshBasicMaterial()
        //     );
        //     scene.add(cube);

        //Light
        const ambientalLight = new THREE.AmbientLight(0xffffff, 12)
        scene.add(ambientalLight)

        const pointLight = new THREE.PointLight(0xffffff, 12)
        pointLight.position.set(8, 8, 8)

        const envMap = new THREE.CubeTextureLoader().load(
            [
                './envmap/px.png',
                './envmap/nx.png',
                './envmap/py.png',
                './envmap/ny.png',
                './envmap/pz.png',
                './envmap/nz.png',

            ]
        )
        scene.environment = envMap

        return () => {
            window.removeEventListener("resize", resize);
            currentRef.removeChild(renderer.domElement);
        };
    // }, []);

    // return (
    //     <div
    //         className='Contenedor3D'
    //         ref={mountRef}
    //         style={{ width: "51%", height: "40vh" }}
    //     ></div>
    // );
// };

init()

