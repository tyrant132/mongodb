use('testDB')

// db.createCollection('users')

/**
 * Default behaviour ordered insertion
 */
// db.users.insertMany([
//   {_id:1, name:"ml"},
//   {_id:2, name: "Nitin"},
//   {_id: 1, name: 'nk'},// Breaks here
//   {_id: 3, name:"ml"}
// ])

/**
 * Unordered Insertion 
 */
// db.users.insertMany([
//   {_id:1, name:"ml"},// Skips this
//   {_id:2, name: "Nitin"},// Skips this
//   {_id: 1, name: 'nk'},// Skips this
//   {_id: 3, name:"ml"}// record created
// ], {ordered:false})
