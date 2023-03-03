/*
  CUSTOM CONFIGS

    package.json
    > "eject": "react-scripts eject"
    > npm run eject

      + ? Are you sure you want to eject? This action is permanent. » (y/N) > ONE WAY STREET > choose No > just choose Yes only when we know what we are doing 
        > After doing this, package.json will show all the dependencies that are package in react-app
        > also there are many config files appear 
        > pic: eject
*/

import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))
const element = <h1>Hello World</h1>

root.render(element)
