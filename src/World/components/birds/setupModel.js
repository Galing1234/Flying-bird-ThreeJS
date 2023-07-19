import { AnimationMixer } from "../../../three/build/three.module.js";

function setupModel(data) {
  const model = data.scene.children[0] ;
  const clip = data.animations[0] ;

  const mixer = new AnimationMixer(model) ;
  const action = mixer.clipAction(clip) ;
  action.play() ;

  model.tick = (delta) => mixer.update(delta) ;

  action.startAt(2) ;
  action.setEffectiveTimeScale(0.5) ;

  return model ;
}

export { setupModel } ;