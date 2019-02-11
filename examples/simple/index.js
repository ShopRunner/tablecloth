const { Database, Schema, Model } = require('../../dist');

const db = new Database({});

const userSchema = new Schema({
  columns: {},
});

class UserModel extends Model {
  static get tableName() {
    return 'user-table';
  }

  static get schema() {
    return userSchema;
  }

  async findUser(userId) {
    return super.findById(userId);
  }
}

const foo = UserModel.find();

