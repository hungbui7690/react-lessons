/*
  Setting Attributes
  (1) counter.jsx

  (***) page not auto refresh:
    > create .env > FAST_REFRESH=false

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
