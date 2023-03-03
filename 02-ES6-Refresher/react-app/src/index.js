/*
  ARROW FUNCTION & "THIS"
*/

const person = {
  talk() {
    console.log('this-1: ', this)

    // (***) using normal function here
    setTimeout(function () {
      console.log('this-2: ', this)
    })
  },
}

// because we call person.talk(), but we don't call person.setTimeout() > window
person.talk() // this-1 === person, this-2 === window
