//variables for setup

let container;
let camera;
let renderer;
let scene;
let person;

function init() {
    container = document.querySelector('.scene');

    //Create scene
    scene = new THREE.Scene();

    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 500;
    //Camera setup
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(-30, 1, 200); // (x,y,size)
    

    // const ambient = new THREE.AmbientLight(0x404040, 3);
    // scene.add(ambient);

    const ambientalLight = new THREE.AmbientLight(0x404040, 6)
    scene.add(ambientalLight)

    // const pointLight = new THREE.PointLight(0x404040, 10)
    // pointLight.position.set(8, 8, 8)
    const light = new THREE.DirectionalLight(0xffffff, 2)
    light.position.set(4, 4, 4);
    scene.add(light);
    //Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);


    //Load Model
    let loader = new THREE.GLTFLoader();
    loader.load('./src/models/muscles/scene.gltf', function (gltf) {
        scene.add(gltf.scene);
        person = gltf.scene.children[0];
        renderer.render(scene, camera);
        animate();

    });

   
}

//Animate rotation

// function animate(){
//     requestAnimationFrame(animate);
//     person.rotation.z += 0.01;
//     renderer.render(scene, camera);
// }

init();

//Resize the object according the screen size

function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);

