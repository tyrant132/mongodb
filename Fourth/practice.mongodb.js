/**
 * To show all the dbs made
 */
//show('dbs');


/**
 * To show collections
 */
//show('collections')

use('shopApp'); // To make connection to a particular database


/**
 * To create Collections (Here Users)
 */
// db.createCollection('users')



/**
 * Find All entry
 */
db.users.find()

/**
 * Insert One entry
 */
// db.users.insertOne({
//   "name": "Vin Wall",
//   "age": 34
// })


/**
 * Insert Many entries(Insert as array of objects)
 */
// db.users.insertMany([
//   {
//     name: "Rahul",
//     email:"rahul@gmail.com",
//     city: "mumbai",
//     age: 23
//   },
//   {
//     name: "Ravi",
//     email:"ravi@gmail.com",
//     city: "mumbai",
//     age: 22
//   }
//   ])

