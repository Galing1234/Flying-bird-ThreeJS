import { Vector3, Scene, PerspectiveCamera, WebGLRenderer, Mesh, Geometry, Face3 } from 'https://cdn.skypack.dev/three@0.132.2';

// Create a scene, camera, and renderer
const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a triangle geometry
const geometry = new Geometry();
geometry.vertices.push(new Vector3(0, 1, 0)); // Vertex A
geometry.vertices.push(new Vector3(-1, -1, 0)); // Vertex B
geometry.vertices.push(new Vector3(1, -1, 0)); // Vertex C
geometry.faces.push(new Face3(0, 1, 2)); // Create a face using vertex indices

// Create a material for the triangle (e.g., MeshBasicMaterial, MeshPhongMaterial)
const material = new MeshBasicMaterial({ color: 0x00ff00 });

// Create a mesh from the geometry and material
const triangle = new Mesh(geometry, material);

// Add the triangle to the scene
scene.add(triangle);

// Position the camera
camera.position.z = 5;

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
