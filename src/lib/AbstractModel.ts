import { ResultSet, ResultSetArray } from '../types/Results';
import ModelInterface from '../interfaces/ModelInterface';
import AbstractLifecycle from './AbstractLifecycle';

export default class AbstractModel extends AbstractLifecycle implements ModelInterface {
  static find(): ResultSetArray | ResultSet {
    return [];
  }
}