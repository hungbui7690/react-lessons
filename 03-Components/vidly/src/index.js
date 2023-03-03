/*
  Setup Vidly Project

  (1) cd vidly > npm install bootstrap@4.1.1 font-awesome@4.7.0
  (2) import
  (3) pic: bootstrap-template > App.js

  (4) copy service/ > contains fake data and functions
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// (2)
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
