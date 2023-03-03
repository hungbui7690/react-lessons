/*
  What Happens When We Click on Increase Button?
  > call setState()
  > and setState() will trigger render() > render() is async > we just know that it will be called in the future
  > render will check in virtual dom, and identify the changes > then update the real dom 
  > check pic

////////////////////////////////////////

  Passing Event Arguments
  (1) counter.jsx

*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import Counter from './components/counter'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
)
