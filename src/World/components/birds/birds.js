import { GLTFLoader } from "../../../three/examples/jsm/loaders/GLTFLoader.js";
import { setupModel } from './setupModel.js';

async function loadBirds() {
  const loader = new GLTFLoader();

  const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync('../../../assets/textures/Parrot.glb'),
    loader.loadAsync('../../../assets/textures/Flamingo.glb'),
    loader.loadAsync('../../../assets/textures/Stork.glb')
  ]);

  console.log('Squaaawk!', parrotData);

  const parrot = setupModel(parrotData);
  parrot.position.set(0, 0, 0);
  parrot.scale.multiplyScalar(0.05); // Scale down by 4x

  const flamingo = setupModel(flamingoData);
  flamingo.position.set(4.5, 0, -4.5);
  flamingo.scale.multiplyScalar(0.05); // Scale down by 4x

  const stork = setupModel(storkData);
  stork.position.set(-4.5, 0, -4.5);
  stork.scale.multiplyScalar(0.05); // Scale down by 4x

  return {
    parrot,
    flamingo,
    stork,
  };
}

export { loadBirds };
