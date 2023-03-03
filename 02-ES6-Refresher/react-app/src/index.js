/*
  SPREAD OPERATOR
*/

const first = [1, 2, 3]
const second = [4, 5, 6]

// combine
const combined = first.concat(second)
const combinedX = [...first, 7, ...second]

console.log('combined: ', combined)
console.log('combinedX: ', combinedX)

//////////////////////////////////

// cloned
const cloned = [...first]
console.log('cloned: ', cloned)
