# bigtable
BigTable wrapper.

# ->> number of versions returned and saved

## Features
* Schema Enforcement
* Multiple Data Type Support (Array, Integer, etc.)
* Multiple Indexes
* BigQuery Schema generation

### Basic API
The API mimics the mongoose API. This is for a couple reasons:
* Node developers are used to it.
* Its well developed and meets our needs.

#### Column-Family Types
// add description

* Base - Key/value pairs with the values being any schema.
* HashMap - All column keys can match a regex pattern, while all values are of the same type.

#### Column Data Types
// add description

* String
* Number (we will look to seperate Integer & Float if possible)
* DateTime
* Object (no rowkey)
* Array (no rowkey)
* Set (no rowkey)
* Binary
* Boolean

Nil is Null, undefined or empty string

#### BigQuery Schema Generation
An API is provided to generate the necessary BigQuery schema based off the Model definition.

```javascript
const {Schema} = require('@precognitive/bigtable');

const myModel = new Schema({/* add stuff */});

const bigQuerySchemaDefinition = myModel.generateBigQuerySchema();
```

**NOTE**: BigQuery is slow on large BigTable datasets.

#### Hooks
Hooks are executed at different points during the Models lifecycle. These hooks can be used to implement custom validation and custom de/serialization.

| Hook      | Lifecycle                                                                     |
|-----------|-------------------------------------------------------------------------------|
| preSave   | This is executed before saving a Model, Column-Family or Column to BigTable   |
| postSave  | This is executed after saving a Model, Column-Family or Column to BigTable    |
| preFetch  | This is executed before fetching a Model, Column-Family or Column to BigTable |
| postFetch | This is executed after fetching a Model, Column-Family or Column to BigTable  |

#### RowKey Generation
The row key can be defined in the Schema

```
// timestamp/reverseTimestamp
// This is an example and NOT the final API

const model = new Schema({
  id: {
    user: {type: DateTime}
  },
  user: {
    created: {type: DateTime}
    email: {type: DateTime}
  }
}, {
  rowKey: [
    'field:id.user',
    ''
  ]
});

// Row key can also be customized
```

### Indexes

#### Index Tables

#### Index Dupe

### Migrations
MetaData column

created, updated, version

// version is used to walk through migrations
// migration mode has to be enabled

// different modes allowed: lazy migration, transform only, write only

ETL migrations too... run in kubes task

// allow old versions to be output (legacy code)

#### Range Queries (timetamp / reverse timepstamp)

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
* User Interface for managing BigTable Models
* TTL based indexes
* Python Support
* Go Support
