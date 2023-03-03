/*
  HELLO WORLD!
  - delete all files in src/
  - create src/index.js

*/

// (1)
import React from 'react'
import ReactDOM from 'react-dom/client'

// (3)
const root = ReactDOM.createRoot(document.getElementById('root'))

// (2)
const element = <h1>Hello World</h1>
console.log(element) // part of virtual dom: lightweight in memory representation of the UI

// (4)
root.render(element)
