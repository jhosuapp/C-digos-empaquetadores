import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from '../jsx/components/Header';
import { Loader } from '../jsx/components/Loader';

//GLOBAL STYLES
import '../sass/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Loader />
  </React.StrictMode>
)
