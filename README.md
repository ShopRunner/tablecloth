# bigtable
BigTable wrapper.

```javascript

const {Schema} = require('@precognitive/bigtable');

const schema = {
  'id': {
     'session': {type: String},
     'user': {type: String},
  },
  'user': {
     'visits': {type: Array},
     'data': {type: Object}
  },
};

// connection options
const options = {
  projectId: '122'
};

const model = Schema.create(schema, options);

class SomeModel {
  // custom method
  findAThingById() {
  
  }

  // override create
  create() {
  
  }
}

module.exports = bigtable.load();
```
