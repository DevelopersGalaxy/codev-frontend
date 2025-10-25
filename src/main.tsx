import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const root = createRoot(document.getElementById('root')!)

const bootstap = () => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

bootstap()
