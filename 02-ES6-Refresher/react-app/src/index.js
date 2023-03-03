/*
  INHERITANCE
*/

class Person {
  constructor(name) {
    this.name = name
  }

  walk() {
    console.log('walk')
  }
}

// (1)
class Teacher extends Person {
  // (2)
  constructor(name, degree) {
    super(name) // (***) if not user super() > error
    this.degree = degree
  }

  teach() {
    console.log('teach')
  }
}

// teacher now have properties & methods of Person class
const teacher = new Teacher('Joe', 'MS')
teacher.walk()
