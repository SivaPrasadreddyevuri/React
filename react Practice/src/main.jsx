import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import "./App.css"
// import {data} from'./data/studentdata' 
 

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
// import Student from './Custom Component/Components/Student'
// import Staff from './Custom Component/Components/Staff'
// import Parent from './ClassBasedComponents/Parent'
// import Child from './ClassBasedComponents/Child'
// import Counter from './ClassBasedComponents/Counter'
import Button from './ClassBasedComponents/Tasks/Button'
import DisplayingNamesWithColors from "./ClassBasedComponents/Tasks/DisplayingNamesWithColors"
import TrackTextInInput from './ClassBasedComponents/Tasks/TrackTextInInput'
import Form from './ClassBasedComponents/Forms/Forms'
import Table from './Table'
import CollectingDataAndDispalyingCard from './ClassBasedComponents/Forms/CollectingDataAndDispalyingCard'
import ApiCallAndDisplyCards from './ClassBasedComponents/ComponentLifeCycleMethods/ComponentDidMount'
// import Component from './D/S'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Head/>
    <About/>
    <Info/>
    <Footer/> */}
    {/* <C1/> */}
    {/* <Student/>
    <Staff/> */}
    {/* <Parent/>
    <Child/> */}
    {/* <Counter/> */}
    {/* <Button/>  */}
    {/* <DisplayingNamesWithColors/> */}
    {/* <TrackTextInInput/> */}
    {/* <Form/> */}
    {/* <CollectingDataAndDispalyingCard/> */}
    {/* <Table data={data}/> */}
    <ApiCallAndDisplyCards/>
  </StrictMode>,
)
