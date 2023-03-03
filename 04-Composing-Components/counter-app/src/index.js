/*
  Passing Data to Components

  (1) counter[s].jsx

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
