import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App';
import MenuBar from './components/public/MenuBar';
import Footer from './components/public/footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <MenuBar/>
    <App />
    <Footer/>
  </BrowserRouter>,
);