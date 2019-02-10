// import BigTable from '@google-cloud/bigtable';

import Model from './Model';
import Schema from './Schema';

declare interface DatabaseOptions {
  projectId: string;
  instance: string;
  appProfile: string;
  keyFilename: string;
}

declare interface ModelOptions {}

export default class Database {
  constructor(options: DatabaseOptions) {
    // @todo implement
  }

  model(name: string, schema: Schema, options: ModelOptions): Model {
    return new Model();
  }

  /**
   * @description Raw connection to the underlying Bigtable DB
   */
  connection(): any {
    return;
  }
}
