import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGL1Renderer();
const scene = new THREE.Scene();
// -----------
const width = window.innerWidth;
const height = window.innerHeight;
// -----------------
const camera = new THREE.PerspectiveCamera(75,width/height,0.1,1000);
const axesHelper = new THREE.AxesHelper(2);
// ------------- objets
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color : "orange"});
const box = new THREE.Mesh(boxGeometry,boxMaterial);
// ----------- orbi
const orbit = new OrbitControls(camera,renderer.domElement);
// grille
const grid = new THREE.GridHelper(100,100);
// mure
const planeGeometry = new THREE.PlaneGeometry(30,30);
const planeMaterial = new THREE.MeshBasicMaterial({color : "green",side : THREE.DoubleSide});
const plane = new THREE.Mesh(planeGeometry,planeMaterial);
plane.rotation.x = -0.5 * Math.PI;
// sphere
const sphereGometry = new THREE.SphereGeometry(4,50,50);
const spherMaterial = new THREE.MeshBasicMaterial({color : "purple",wireframe : false});
const sphere = new THREE.Mesh(sphereGometry,spherMaterial);
sphere.position.set(-10,10,0);

renderer.setSize(width,height);

document.body.appendChild(renderer.domElement);

scene.add(axesHelper);
scene.add(box);
scene.add(grid);
scene.add(plane);
scene.add(sphere);
camera.position.set(-10,30,30);
orbit.update();

function animation() {
    box.rotation.x += 0.01;
    box.rotation.y += 0.002;
    renderer.render(scene,camera);
}

renderer.setAnimationLoop(animation);