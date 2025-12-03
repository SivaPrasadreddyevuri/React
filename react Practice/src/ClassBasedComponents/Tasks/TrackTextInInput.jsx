import { Component } from "react";
class TrackTextInInput extends Component {
  constructor() {
    super();
    this.state = {
      inputtext: "",
      color: "orange",
    };
  }
  handleText = (e) => {
    this.setState({ inputtext: e.target.value });
  };
  render() {
    const { color } = this.state;
    console.log(this.state.inputtext);
    return (
      <>
        <h3 style={{ color: `${color}` }}>{this.state.inputtext}</h3>
        <input
          type="text"
          placeholder="Type Something............."
          onChange={this.handleText}
        />

        <div style={{width:"200px", height:"200px",backgroundColor:`${this.state.inputtext}`==="male"?"red":this.state.inputtext==="female"?"green":"brown"}}></div>
        <select onChange={this.handleText}>
          <option value="">select</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
      </>
    );
  }
}
export default TrackTextInInput;

// class TrackTextInInput extends Component {
//   constructor() {
//     super();
//     this.state = {
//       inputText: "",
//     };
//   }
//   handleText = (e) => {
//     this.setState({ inputText: e.target.value });
//   };
//   render() {
//     return (
//       <>
//         <input
//           type="text"
//           placeholder="Type Something........"
//           onChange={this.handleText}
//         />
//         <h1>{this.state.inputText}</h1>

//         <select onChange={this.handleText}>
//           <option value="">Select</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Others">Others</option>
//         </select>

//         <div style={{ width: "200px", height: "220px", backgroundColor:`${this.state.inputText}`=== "Male"?"red":this.state.inputText==="Female"?"blue":"green"}}></div>
//       </>
//     );
//   }
// }
// export default TrackTextInInput;
