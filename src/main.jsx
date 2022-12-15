import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/*
  Extra credit: 
  -css: real dots on dice
  -Track number of rolls
  -Track time it took to win
  -Save best time to local storage
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
