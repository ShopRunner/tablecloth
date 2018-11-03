# High Level Docs
This can be removed later in favor of jsdoc docs.


```js
const TableCloth = require('@precognitive/tablecloth');

const db = new TableCloth({
  projectId: process.env.GCP_PROJECT_ID,
  instance: process.env.BIGTABLE_INSTANCE_ID
});

// Simple Model: User.js

const {ColumnFamilyTypes, DataTypes} = TableCloth.Schema;

const userSchema = Schema({
  id: {
    type: ColumnFamilyTypes.Base,
    columns: {
      userId: {type: DataTypes.String}
    }
  },
  data: {
    type: ColumnFamilyTypes.Base,
    columns: {
      email: {type: DataTypes.String},
      created: {type: DataTypes.DateTime},
      updated: {type: DataTypes.DateTime}
    }
  }
}, {
  rowKey: ['id.userId', 'data.email'],
  indexes: {
    email: ['data.email'],
    userId: ['id.userId'],
    
    // composite index example
    userId_email: ['id.userId', 'data.email']
  }
});

module.exports = db.model('user', userSchema);

// Simple Model Usage: User.js

const User = require('<model-root>/User');

app.get('/users/:user_id', async (req, res) => {
  const {user_id} = req.params;
  res.json(await User.findById(user_id));
});


```
