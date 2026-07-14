show('dbs')

use('ecommerce')

db.users.find()

/**
 * $and = All the conditions in this to be true 
 * Put inside as array of objects(conditions)
 */

// db.users.find(
//  { $and:  [
//     {score: {$gt: 80}},
//     {age: {$lt: 30}}
//   ]}
// )

/**
 * $or = Any one of the conditions to be true
 */
// db.users.find(
//  { $or:  [
//     {score: {$gt: 80}},
//     {age: {$lt: 30}}
//   ]}
// )


/**
 * $nor = neither of the conditions to be true
 */

// db.users.find(
//  { $nor:[
//     {score: {$lt: 80}},
//     {age: {$lt: 30}}
//   ]}
// )

/**
 * $not = negation of the condition (use before a condition )
 */
// db.users.find({
//   score: {$not: {$gt: 80}}
// })