/*
  Stateless Functional Components
  - Navbar component does not have any calculation > just have render() > we don't have any event handler or helper methods to calculate values > also don't have state > in this situation, we can convert it into "SFC"


*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
