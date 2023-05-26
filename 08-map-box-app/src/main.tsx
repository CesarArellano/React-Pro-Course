import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainApp } from './MainApp.tsx'

if( !navigator.geolocation ) {
  alert("Your browser doesn't have the Geolocation Option")
  throw new Error("Your browser doesn't have the Geolocation Option")
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
)
