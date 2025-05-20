import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'; // 👈 importera BrowserRouter
import { HashRouter as Router } from "react-router-dom";

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/CV-online"> {/* 👈 lägg till basename här */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
