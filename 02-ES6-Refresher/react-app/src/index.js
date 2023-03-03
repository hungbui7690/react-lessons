/*
  SPREAD OPERATOR
*/

const first = { name: 'Joe' }
const second = { job: 'Developer' }

// combined
const combined = { ...first, ...second, location: 'City X' }
console.log('combined :>> ', combined)

// cloned
const cloned = { ...first }
console.log('cloned :>> ', cloned)
