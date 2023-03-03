/*
  Lifecycle Hooks > pic
  - our components go through a few phases during a lifecycle:
    + 1st phase: Mounting Phase: when the component is created and inserted into the DOM > there are some few methods on those phase, and react will call them automatically > we refers this as lifecycle hooks > they allows us to hook into certain moment during the lifecycle of the component to do something
      - constructor
      - render 
      - componentDidMount
      > run from top to bottom 

    + 2nd phase: Update
      - render 
      - componentDidUpdate

    + 3rd phase: Delete
      - componentWillUnmount 

    (***) these 3 are the most common ones > there are some more, but we rarely use them 
  
///////////////////////////////////////////////

  Mounting Phase

  (1) App.js

*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
