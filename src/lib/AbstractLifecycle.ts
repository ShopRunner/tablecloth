import LifecycleInterface, { LifecycleCallback } from '../interfaces/LifecycleInterface';
import { Results, ResultSetArray } from '../types/Results';

function defaultCallBack(data: Results | ResultSetArray): void {
  return;
}

export default abstract class AbstractLifecycle implements LifecycleInterface {
  preSave(callback: LifecycleCallback = defaultCallBack): void {
    return;
  }

  postSave(callback: LifecycleCallback = defaultCallBack): void {
    return;
  }

  preCreate(callback: LifecycleCallback = defaultCallBack): void {
    return;
  }

  postCreate(callback: LifecycleCallback = defaultCallBack): void {
    return;
  }

  preUpdate(callback: LifecycleCallback = defaultCallBack): void {
    return;
  }

  postUpdate(callback: LifecycleCallback = defaultCallBack): void {
    return;
  }

  preDelete(callback: LifecycleCallback = defaultCallBack): void {
    return;
  }

  postDelete(callback: LifecycleCallback = defaultCallBack): void {
    return;
  }
}
