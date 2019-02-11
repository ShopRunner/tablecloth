import BigTable from '@google-cloud/bigtable';

import Model from './Model';
import Schema from './Schema';

declare interface DatabaseOptions {
  projectId: string;
  instance: string;
  appProfile: string;
  keyFilename: string;
}

declare interface ModelOptions {
}

export default class Database {
  constructor(options: DatabaseOptions) {
    const bigTable = new BigTable();
    this.db = bigTable.instance(options.instance);
    this.options = options;
  }

  model(name: string, schema: Schema, options: ModelOptions): Model {
    return new Model(name, schema, {
      ...options,
      db: this.db,
    });
  }

  /**
   * @description Raw connection to the underlying Bigtable DB
   */
  connection(): any {
    return this.db;
  }

  private readonly db: any;
  private readonly options: DatabaseOptions;
}
