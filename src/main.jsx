import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // 👈 importera BrowserRouter
import { HashRouter as Router } from "react-router-dom";

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename="/CV-online"> {/* 👈 lägg till basename här */}
      <App />
    </Router>
  </StrictMode>,
)
