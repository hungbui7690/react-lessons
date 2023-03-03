/*
  (1) npx create-react-app counter-app
  (2) install bootstrap 
      > npm i bootstrap@4.1.1

*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// (3)
import 'bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
