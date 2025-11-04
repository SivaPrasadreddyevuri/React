
// import './App.css'
// import StudentTable from './components/Student'

import { Component } from "react";
import  "./App.css"
// function App() {
  
//   return (
//     <>
//       <StudentTable/>
//     </>
//   )
// }

// export default App


// Understanding Concepts For StateManagement in CBC 

// class Counter extends Component
// { 
// return 
//  constructor(){
//   super()
//    this.state={
//     count:0
//   }
//  }
//   handleIncrement=()=>{
//     this.setState({count:this.state.count+1})
//   }
//   handleDecrement=()=>{
//     this.setState({count:this.state.count-1})
//   }
//   handleReset=()=>{
//     this.setState({count:0})
//   }
//   render(){
//     return(
//     <div>
//       <h3>{this.state.count}</h3>
//      <button onClick={this.handleIncrement} disabled={this.state.count>=100}>+</button>
//      <button onClick={this.handleReset} disabled={this.state.count==0}>Reset</button>
//      <button onClick={this.handleDecrement} disabled={this.state.count<=0}>-</button>
//     </div>
    
//     )
// }
// }
// export default Counter

// class Toggle extends Component{

//   constructor(){
//     super()
//     this.state={
//       isToggle:"Login"     //true
//     }
//   }

// handleToggle=()=>{
//   // console.log("is trigger")
//   this.setState({isToggle:this.state.isToggle==="Login"?"LogOut":"Login"}) //this.setState({isToggle:this.state.isToggle})
       
// }
// render(){
//   return(<><button onClick={this.handleToggle}>{this.state.isToggle}</button></>) //  <button>{this.state.isToggle?"Login:"LogOut"}</button>>
// }
  
// }
// export default Toggle


class ApplyingColorsToText extends Component{
constructor(){
  super()
  this.state={
    names:["Siva","Prasad","Reddy","Evuri"],
    colors:["red","green","Orange","Blue"]
  }
}
 render(){
  const {names,colors}=this.state
  return(
  <>
  <div>
    {names.map((name,index)=>{
     return <h3 style={{color:colors[index]}}>{name}</h3>
    })
  }
    </div>
  </>
  )
    
}
}
export default ApplyingColorsToText