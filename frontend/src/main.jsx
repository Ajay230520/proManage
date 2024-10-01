import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import App from './App.jsx'

const element = document.getElementById("root");
createRoot(element).render(
  <StrictMode>
    <App />
  </StrictMode>
)