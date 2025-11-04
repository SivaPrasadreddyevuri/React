import "./App.css"
import Child1 from "./Components/Child1"
// import Child2 from "./Components/Child2"
// import  data from "./data/sampleData.js"



const Parent=()=>{
  const data = [
    { id: "1", name: "reddy", age: "24" },
    { id: "2", name: "reddy", age: "25" },
    { id: "2", name: "reddy", age: "25" },
    { id: "2", name: "reddy", age: "25" },
    { id: "2", name: "reddy", age: "25" },
    { id: "2", name: "reddy", age: "25" },
    { id: "2", name: "reddy", age: "25" },
    { id: "2", name: "reddy", age: "25" },
    { id: "2", name: "reddy", age: "25" },
    { id: "2", name: "reddy", age: "25" },
    { id: "2", name: "reddy", age: "25" },
    { id: "2", name: "reddy", age: "25" },
    { id: "2", name: "reddy", age: "25" },
    { id: "2", name: "reddy", age: "25" },
    { id: "2", name: "reddy", age: "25" },
    { id: "2", name: "reddy", age: "25" },
    { id: "3", name: "reddy", age: "25" },
  ];
  
  return(
    <>
<Child1 data={data}/>

    </>
  )
}
export default Parent







