import { ResultSet, ResultSetArray } from '../types/ResultSet';

export declare type LifecycleCallback = (data: ResultSet | ResultSetArray) => void;

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
