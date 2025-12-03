// import React from "react";
// Import Component class from React library
import { Component } from "react";
import Child from './Child';
import { StudentData } from "../Custom Component/Data/Studentdata";
class Parent extends Component {
  render() {
    return <>
    <Child data={StudentData}/>
    </>;
  }
}

export default Parent;
