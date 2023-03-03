/*
  Removing Local State
  - Component that does not have Local State, and receive data or ask for data when update from parent is called Controlled Component > is controlled by parent

  (1) remove all local state & methods from Counter 

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
