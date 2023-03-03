/*
  YOUR FIRST REACT COMPONENT
  
  (1) create /components/counter.jsx
      > jsx : better compilation than js 

*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

// (3a)
import Counter from './components/counter'

const root = ReactDOM.createRoot(document.getElementById('root'))

// (3b)
root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
)
