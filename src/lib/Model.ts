'use strict';

import _ from 'lodash';

import { ResultSet, ResultSetArray } from '../types/Results';
import ModelInterface from '../interfaces/ModelInterface';
import AbstractLifecycle from './AbstractLifecycle';
import Schema from './Schema';

/**
 * @class Model
 * @extends AbstractLifecycle
 * @implements ModelInterface
 * @description Model is the base representation of a row.
 */
export default class Model extends AbstractLifecycle implements ModelInterface {
  public static tableName: string;

  constructor(name: string, schema: Schema, options: any) {
    super();
    if (_.isNil(options.db)) {
      throw new Error('Missing Database connection, please inject or use db.model.');
    }
  }

  static async find(): Promise<ResultSetArray> {
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
