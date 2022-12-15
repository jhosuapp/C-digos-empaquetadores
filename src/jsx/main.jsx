import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from '../jsx/components/Header';
import { Loader } from '../jsx/components/Loader';
import { Content } from '../jsx/components/Content';

//GLOBAL STYLES
import '../sass/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Loader />
    <Content />
  </React.StrictMode>
)
