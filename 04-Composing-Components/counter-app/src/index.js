/*
  Lifting State UP

  (1) move all states and methods from Counters to App & fix the errors

  > at this time, the Counter[s] component becomes Controlled component
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
