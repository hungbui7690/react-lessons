/*
  Multiple Components in Sync > pic
  - now, we want to have:
    App
      Navbar (bootstrap)
      Counters
        Counter

  (0) Create /components/navbar.jsx

*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

// (1)
root.render(
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
)
