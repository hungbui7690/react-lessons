/*
  Composing Components
  - react > tree of components > pic

  (1) create components/counters.jsx


*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

// (2a)
import Counters from './components/counters'

const root = ReactDOM.createRoot(document.getElementById('root'))

// (2b)
root.render(
  <React.StrictMode>
    <Counters />
  </React.StrictMode>
)
