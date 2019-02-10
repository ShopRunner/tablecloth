import { ResultSet, ResultSetArray } from '../types/Results';

export default interface ModelInterface {
  find(): Promise<ResultSetArray>;

  findOne(): Promise<ResultSet>;

  findById(): Promise<ResultSet>;

  save(): Promise<void>;

  create(): Promise<void>;

  update(): Promise<void>;

  delete(): Promise<void>;
}
