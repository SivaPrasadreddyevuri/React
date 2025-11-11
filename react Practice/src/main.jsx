import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import "./App.css"

// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.min.js"

// import Head from './Components/Header'
// import About from './Components/Banner'
// import Info from './Components/Main'
// import Footer from './Components/Footer'
// import Header from "./landing pages/header.jsx"
// import Banner from './landing pages/banner.jsx'
// import Cards from './landing pages/main.jsx' 
// import Header from "./Portfolio/H.jsx";
// import Banner from  "./Portfolio/Ban.jsx"
// import "./index.css";
// import Table from './Portfolio/B.jsx';
// import Footer from './Portfolio/F.jsx'
// import C1 from './Props/1'
import Student from './Custom Component/Components/Student'
import Staff from './Custom Component/Components/Staff'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Head/>
    <About/>
    <Info/>
    <Footer/> */}
    {/* <C1/> */}
    <Student/>
    <Staff/>
   
  </StrictMode>,
)
