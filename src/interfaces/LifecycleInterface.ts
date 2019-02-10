import { Results, ResultSetArray } from '../types/Results';

export declare type LifecycleCallback = (data: Results | ResultSetArray) => void;

export default interface LifecycleInterface {
  preSave(callback: LifecycleCallback): void;

  postSave(callback: LifecycleCallback): void;

  preCreate(callback: LifecycleCallback): void;

  postCreate(callback: LifecycleCallback): void;

  preUpdate(callback: LifecycleCallback): void;

  postUpdate(callback: LifecycleCallback): void;

  preDelete(callback: LifecycleCallback): void;

  postDelete(callback: LifecycleCallback): void;
}
