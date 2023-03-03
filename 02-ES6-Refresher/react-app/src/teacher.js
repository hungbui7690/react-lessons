import Person from './person'

// named export > now, outside can see these 2
export function promote() {}
export function remote() {}

export default class Teacher extends Person {
  constructor(name, degree) {
    super(name)
    this.degree = degree
  }

  teach() {
    console.log('teach')
  }
}
