import {
  SphereGeometry,
  Group,
  MathUtils,
  Mesh,
  MeshStandardMaterial
} from "../../three/build/three.module.js";

function createMeshGroup() { 
  const group = new Group() ;

  const geometry = new SphereGeometry(0.25, 16, 16) ;
  const material = new MeshStandardMaterial({ 
    color: 'indigo',
    flatShading: true 
  }) ;

  const protoSphere = new Mesh(geometry, material) ;

  for (let i = 0 ; i < 1 ; i += 0.005) {
    const clonedSphere = protoSphere.clone() ;

    clonedSphere.position.x = Math.cos(2 * Math.PI * i);
    clonedSphere.position.y = Math.sin(2 * Math.PI * i);
    clonedSphere.position.z = -i * 5;

    clonedSphere.scale.multiplyScalar(0.01 + i) ;
    group.add(clonedSphere) ;
  }

  const RPS = MathUtils.degToRad(30) ;

  group.add(protoSphere) ;
  group.tick = (delta) => {
    group.rotation.z += delta * RPS ;
  } ;

  return group ;
}

export { createMeshGroup } 