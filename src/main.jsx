import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QuranProvider } from './context/QuranContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuranProvider>
      <App />
    </QuranProvider>
  </StrictMode>,
)
