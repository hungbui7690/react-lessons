/*
  LET 
  - block scope

  CONST 
  - block scope
  - constant

  > prefer "const" rather than "let"
*/

const x = 1
// x = 2

function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i)
  }
}

sayHello()
