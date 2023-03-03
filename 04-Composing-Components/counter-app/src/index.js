/*
  Single Source of Truth
  - now, we want to have the reset buttons, to reset all the value back to zero

  (1) counter[s]

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
