import { Results, ResultSetArray } from '../types/Results';

export default interface ModelInterface {
  find(): Promise<ResultSetArray>;

  findOne(): Promise<Results>;

  findById(): Promise<Results>;

  save(): Promise<void>;

  create(): Promise<void>;

  update(): Promise<void>;

  delete(): Promise<void>;
}
