/*
  Updating Phase
  - when we click the Increment button, the component tree is rendered > it does not mean the the real DOM is rendered > we have the old Virtual DOM (VD) and new VD ref in the memory > react will compare these 2 DOMs and figures out the changes that need to be updated and update the real DOM
  
*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
