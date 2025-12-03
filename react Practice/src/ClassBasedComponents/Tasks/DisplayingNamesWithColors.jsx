import { Component } from "react";

class DisplayingNamesWithColors extends Component {
  constructor() {
    super();
    this.state = {
      name: ["siva", "Prasad", "reddy"],
      colors: ["red", "green", "blue"],
    };
  }

  render() {
    const {name,colors}=this.state
    // console.log(name)
    // console.log(colors)
    return (
      <>
        <h1>Displaying Names With Colors</h1>
       {
        name.map((name,index)=>{
          return(
            <h2 style={{color:`${colors[index]}`}} key={index}>{name}</h2>
          )

        })
       }

      </>
    );
  }
}
export default DisplayingNamesWithColors;
