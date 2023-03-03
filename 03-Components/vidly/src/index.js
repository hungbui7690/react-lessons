/*
  Exercise:
  - pic: exercise > build movies component

/////////////////////////////////////////////////

  Building the Movies Component

  (1) create /components/movies.jsx
    > pic: table-bootstrap


*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
