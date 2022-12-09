import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from '../jsx/components/Header';

//GLOBAL STYLES
import '../sass/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
)
