// import BigTable from '@google-cloud/bigtable';

declare interface DatabaseOptions {
  projectId: string;
  instance: string;
  appProfile: string;
  keyFilename: string;
}

export default class Database {
  constructor(options: DatabaseOptions) {
    // @todo implement
  }
}
