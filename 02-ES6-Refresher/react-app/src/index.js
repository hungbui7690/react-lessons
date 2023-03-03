/*
  ARROW FUNCTION & "THIS"
  > arrow function does not have its own "this" keyword
*/

// Solution 1
const person = {
  talk() {
    const self = this // (1)
    setTimeout(function () {
      console.log('self:', self) // (2)
    })
  },
}

// Solution 2
const personX = {
  walk() {
    // (***) use arrow function > "this" keyword of arrow function will inherits the context of surrounding scope
    setTimeout(() => {
      console.log('this:', this)
    })
  },
}

person.talk() // person
personX.walk() // personX
