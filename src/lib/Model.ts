'use strict';

import AbstractLifecycle from './AbstractLifecycle';
import ModelInterface from '../interfaces/ModelInterface';
import { ResultSet, ResultSetArray } from '../types/Results';

/**
 * @class Model
 * @extends AbstractLifecycle
 * @implements ModelInterface
 * @description Model is the base representation of a row.
 */
export default class Model extends AbstractLifecycle implements ModelInterface {
  async find(): Promise<ResultSetArray> {
    return [];
  }

  async findById(): Promise<ResultSet> {
    return [];
  }

  async findOne(): Promise<ResultSet> {
    return [];
  }

  async save(): Promise<void> {
    return;
  }

  async create(): Promise<void> {
    return;
  }

  async update(): Promise<void> {
    return;
  }

  async delete(): Promise<void> {
    return;
  }
}
