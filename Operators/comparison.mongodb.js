use('ecommerce')
db.users.find()

// db.users.insertMany([
//   {
//     "_id": "60f7b3b8e5d4c20015a1b3c9",
//     "name": "Alice Johnson",
//     "age": 29,
//     "email": "alice.johnson@example.com",
//     "isActive": true,
//     "score": 87.5,
//     "registeredDate": "2024-03-15T10:30:00Z"
//   },
//   {
//     "_id": "60f7b3b8e5d4c20015a1b3ca",
//     "name": "Bob Smith",
//     "age": 34,
//     "email": "bob.smith@example.com",
//     "isActive": false,
//     "score": 92.0,
//     "registeredDate": "2023-11-20T08:15:00Z"
//   },
//   {
//     "_id": "60f7b3b8e5d4c20015a1b3cb",
//     "name": "Charlie Brown",
//     "age": 22,
//     "email": "charlie.b@example.com",
//     "isActive": true,
//     "score": 78.3,
//     "registeredDate": "2025-01-10T14:45:00Z"
//   },
//   {
//     "_id": "60f7b3b8e5d4c20015a1b3cc",
//     "name": "Diana Prince",
//     "age": 28,
//     "email": "diana.prince@example.com",
//     "isActive": true,
//     "score": 95.8,
//     "registeredDate": "2024-07-05T09:00:00Z"
//   },
//   {
//     "_id": "60f7b3b8e5d4c20015a1b3cd",
//     "name": "Ethan Hunt",
//     "age": 41,
//     "email": "ethan.hunt@example.com",
//     "isActive": false,
//     "score": 88.1,
//     "registeredDate": "2022-05-30T16:20:00Z"
//   }
// ])


/**
 * $gt = greater than
 */
// db.users.find(
//   {age:{$gt: 28}}
// )


/**
 * $lt = less than
 */
// db.users.find(
//   {score: {$lt: 90}}
// )

/**
 * $ne = not equal to
 */
// db.users.find(
//   {name: {$ne: 'Alice Johnson'}}
// )

/**
 * Similarly you could use 
 * $lte = less than or equal to
 * $gte = greater than or equal to
 * $eq = equal to
 */