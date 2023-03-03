/*
  VAR
  - function scope
*/

function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i)
  }
  console.log(i) // var: function scope
}

sayHello()
