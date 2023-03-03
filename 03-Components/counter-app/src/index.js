/*
  Rendering Classes Dynamically
  (1) counter.jsx

  (***) if we want to create method in a class > select the lines that we want to be in that method > Refactor > Extract to method...
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import Counter from './components/counter'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
)
