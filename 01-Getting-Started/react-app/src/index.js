/*
SETUP

  Extensions:
  - Simple React Snippets
  - Prettier

//////////////////////////////////////////

YOUR FIRST REACT APP
  > npx create-react-app react-app
    - Dev Server
    - Webpack
    - Babel
    > Zero Configuration 
  
  > if we want to config > npm run eject


  > index.html:
    - manifest : meta-data attributes
    - root div : this is where our react app will appear

  > App.js: 
    - JSX: Javascript XML
    - Code will be passed through Babel: JS compiler > convert JSX into plain JS
      > pic: babel

*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
