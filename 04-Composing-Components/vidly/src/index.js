/*
  Vidly Exercise:
  - check pic
  - build reusable "Like" component > use font-awesome@4.7.0 > search for heart

  (1) create /components/common/: this is the folder where we put all the reusable components (pagination, like, table, form....)
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
