/*
  Debugging React App 
  - install React Developer Tools

//////////////////////////////////////

  Prop vs State
  - in Counter, we use props to initialize the state
  - props is the data we pass cho child components  > props are read-only
  - state is the data that is private in that component, which means we can only change the state if we are in the component that has that state > other components cannot see, access or change that state

//////////////////////////////////////

  Raising Events

  (1) in counter.jsx > we want to create delete button

*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import Counters from './components/counters'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  // <React.StrictMode>
  <Counters />
  // </React.StrictMode>
)
