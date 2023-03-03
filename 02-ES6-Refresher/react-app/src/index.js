/*
  "THIS" KEYWORD
*/

const person = {
  name: 'Joe',
  walk: function () {
    console.log(this)
  },
}
person.walk() // ref to person

///////////////////////////

const walk = person.walk
walk() // window, but in strict mode = undefined
