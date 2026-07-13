use('ecommerce')

// show('collections')

/**
 * To show only name field of the collection entries searched for
 * The one with value 1 is shown and others are treated as with value 0
 * expect for the _id field it is required to set its value 0 if you don't want it
 */
// db.products.find(
//   {category: "electronics"},//Filter
//   {name:1, _id:0}// Projection
// )

/**
 * To not show only name field of the collection entries searched for
 * The one with value 0 is shown and others are treated as with value 1
 */
// db.products.find(
//   {category: "electronics"},
//   {name: 0}
// )

