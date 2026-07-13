
const database = 'ecommerce';
// const collection = 'products';

// // Create a new database.
use(database);

// // Create a new collection.
// db.createCollection(collection);

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/


/**
 * To show all products
 */
db.products.find()
/**
 * Inserted dummy data
 */
// db.products.insertMany([
//   {
//     name:"iPhone",
//     price:45999,
//     category: "electronics",
//     stock: 4
//   },
//   {
//     name:" Laptop",
//     price: 23999,
//     category: "electronics",
//     stock: 5
//   },
//   {
//     name: "HeadPhones",
//     price: 34888,
//     category: "electronics",
//     stock: 2
//   },
//   {
//     name: "Shoes",
//     price: 2344,
//     category: "footwear",
//     stock: 45
//   }
// ])

/**To get product by filtering */
// db.products.find({
//   category: "electronics"
// })

/**
 * To count no of records by filtering for specific documents
 */
// db.products.countDocuments({
//   category: "electronics"
// })


/**
 * To Update one entry
 */
// db.products.updateOne(
//   {name: " Laptop"},
//   {$inc: {stock: 23}}
// )
/**
 * To update many entries
 */
// db.products.updateMany(
//   {category: "electronics"},
//   {$set: {WaterSenstive: true}}

//   )

/**
 * To delete one record
 */
// db.products.deleteOne({name: " Laptop"})

