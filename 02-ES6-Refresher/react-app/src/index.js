/*
  CLASSES
*/

// if we want to create another object with the same properties & methods > need to copy > DRY
const person = {
  name: 'Mosh',
  walk() {
    console.log('Walk')
  },
}

//////////////////////////////////////

// blue print
class Person {
  constructor(name) {
    this.name = name

    // instance method
    this.sleep = function () {
      console.log('Sleep')
    }
  }

  // prototype method
  talk() {
    console.log('Talk')
  }
}

const personX = new Person('Joe')
console.log(personX)
