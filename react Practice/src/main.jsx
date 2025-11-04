import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import "./App.css"

import Header from "./landing pages/header.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Banner from './landing pages/banner.jsx'
import Cards from './landing pages/main.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Banner/>
    <Cards/>
  </StrictMode>,
)
