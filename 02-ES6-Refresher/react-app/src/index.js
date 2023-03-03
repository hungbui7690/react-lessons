/*
  OBJECTS
*/

const person = {
  name: 'Joe',
  walk: function () {},
  talk() {}, // es6
}

person.talk()
person['name'] = ''

const target = 'name'
person[target] = 'John'
