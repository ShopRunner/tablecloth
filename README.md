# bigtable
BigTable wrapper.

### Basic API
The API memics the mongoose API. This is for a couple reasons:
* Node developers are used to it.
* Its well developed and meets our needs.

#### Example
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

// In future schema will be managed in a seperate table from the main data
const model = Schema.create(schema, options);

class SomeModel {
  // custom method
  findAThingById() {
  
  }

  // override create
  create() {
  
  }
}

module.exports = model.load('something', SomeModel);
```

#### Features on Roadmap
* User Interface for managing "Models"
* Natively managed schemas
* BigQuery intergration (generates BigQuery schema and can automatically connect etc.).
