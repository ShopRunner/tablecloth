# ![TableCloth](/logo.png)
A tool for keeping your interactions with BigTable nice and tidy.

# UNDER DEVELOPMENT (coming 2019)
This library was originally built for internal use at [@Precognitive](https://github.com/Precognitive). We are working on finishing up some abstractions and pulling out some [@Precognitive](https://github.com/Precognitive) specific code. Once we do so we will release our initial version (2019).

The below API is a high-level look at the API we intend to bake into TableCloth. Some portions of the API could change, as this is just meant to give interested parties a base-level feel for the API.

If you are interested in being contacted/emailed when we release TableCloth, fill out the contact form at [https://precognitive.io/contact/](https://precognitive.io/contact/) with the message being "BigTable". We will setup a mailing list for updates.

## Why create TableCloth?
We love working with BigTable, its ability to predictively scale, handle tens of thousands of requests per second and its low latency I/O (sub 5ms responses). We don't love working with (byte) strings as the only data type for our data. Our applications need multiple complex data types and a clean interface for modeling data. TableCloth was built to meet both of these requirements (and more).

## Features
* Schema Enforcement - Column Family and Column level data type enforcement.
* Multiple Data Type Support - Arrays, String, Numbers etc. are all supported out of the box. No more casting, JSON parse errors and other issues with storing byte strings.
* Multiple Indexes - BigTable has a single index (the rowKey) and for most applications this just won't work. TableCloth supports multiple indexes out of the box.
* BigQuery Schema generation - Generate a BigQuery schema to be used when querying BigTable via BigQuery.

## Example
Below is an example that demonstrates the high-level API for interacting with TableCloth.

```javascript 
const {TableCloth, Schema} = require('@precognitive/tablecloth');

const db = new TableCloth({
  // pass in connection configs i.e. projectId
});

const {ColumnFamilyTypes, DataTypes} = Schema;

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

// The above will create a rowKey of `<id.userId>#<data.email>` and three index tables, one for userId, one for email and a composite for userId + email (`<id.userId>#<data.email>`).

// 'users' is name of the table
const User = db.model('users', userSchema);

module.exports = User;

// This will be run in a separate task/file not in the main application.
// NOTE: Due to the nature of TableCloth, escalated permissions are required when intially creating the Base, Schema and Index tables.
User.saveSchema({destroy: true});
```
## API & Features

### Design
The API mimics the Mongoose API. This is for a couple reasons:
* Developers are used to it.
* Its well developed and meets our needs.
* You can utilize BigTable in a manner similar to a document store.
* We were using Mongo before, so it made sense.

*NOTE:* TableCloth is **NOT** API compliant or compatiable but mirrors the feel of the Mongoose API.

#### Column-Family Types
* Base - Key/value pairs with the values being any schema.
* HashMap - All column keys can match a regex pattern, while all values are of the same type.

#### Column Data Types
* String
* Number (we will look to seperate Integer & Float if possible)
* DateTime
* Object (no rowkey)
* Array (no rowkey)
* Set (no rowkey)
* Binary
* Boolean

#### Nil
In TableCloth, null, undefined or "" are treated as Nil and will not be stored.

#### BigQuery Schema Generation
An API is provided to generate the necessary BigQuery schema based off the Model definition.

**Example:**
```javascript
const User = require('../models/User.js');

const bigQuerySchemaDefinition = User.generateBigQuery();
```
#### Hooks
Hooks are executed at different points during the Models lifecycle. These hooks can be used to implement custom validation and custom de/serialization.

| Hook      | Lifecycle                                                                     |
|-----------|-------------------------------------------------------------------------------|
| preSave   | This is executed before saving a Model, Column-Family or Column to BigTable   |
| postSave  | This is executed after saving a Model, Column-Family or Column to BigTable    |
| preFetch  | This is executed before fetching a Model, Column-Family or Column to BigTable |
| postFetch | This is executed after fetching a Model, Column-Family or Column to BigTable  |

**Example:**
```javascript 

const User = db.model('users', userSchema);

User.preSave(function(data) {
  console.log('fired - presave');
  return data;
});

```

#### RowKey Generation
The row key can be defined in the Schema as an Array of Strings or Functions.

**Example:**
```
const colSchema = {
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
};

const userSchema1 = Schema(colSchema, {
  rowKey: ['id.userId', 'data.email'],
});

function reverseTimeStamp (cols) {
  return Number.MAX_SAFE_INTEGER - cols.data.created.getTime();
}

// use a function to get/build a reverse timestamp
const userSchema2 = Schema(colSchema, {
  rowKey: ['id.userId', reverseTimeStamp],
});

```

### Indexes
Multiple indexes are supported in TableCloth and can be created based off of the Schema definition.

#### How they work
When querying via an index table under the hood multiple calls are made:

**Example:**
```javascript

// `data` includes the entire `User` record.
const data = await User.findByEmail('18931243-13123-14241');

```

In the above example, what looks like one call is actually two calls:

0. Call method "User.findByEmail"
0. #1 Call - BigTable query against the "users_email" index table
0. Query returns the rowKey(s) of the user(s)
0. #2 Call - BigTable query made using the rowKey(s)
0. Query returns the full user record(s) 

**Special Circumstances:**
If you are less concerned about storage, consistency etc. and more about latency it is possible to define an index as a "duplicate key". What this will do is instead of storing the data in a seperate index table. The data is stored in the base "users" table with a different rowKey. This effectively copies data mulitple times to the same table.

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

-> PolyMorphism

# ->> number of versions returned and saved

#### Features on Roadmap
* User Interface for managing BigTable Models
* TTL based indexes
* Python Support
* Go Support
