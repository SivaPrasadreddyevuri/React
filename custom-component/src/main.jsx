import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './App.jsx'
import Toggle from './App.jsx'
import ApplyingColorsToText from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Counter/> */}
    <Toggle/>
    <ApplyingColorsToText/>
  </StrictMode>,
)
