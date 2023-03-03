/*
  BINDING "THIS" KEYWORD
*/

const person = {
  name: 'Joe',
  walk: function () {
    console.log(this)
  },
}
person.walk() // ref to person

///////////////////////////

// (***) functions are objects > can use call
const walk = person.walk.bind(person)
walk() // ref to person
