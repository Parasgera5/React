import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Axios from './Axios.jsx'
import LoremPicsum from './LoremPicsum.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Axios />
    <LoremPicsum />
  </StrictMode>,
)
