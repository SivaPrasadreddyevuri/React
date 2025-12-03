import { Component } from "react";
import "./Styles.css";
// class Counter extends Component {
//   constructor() {
//     super();

//     this.state = {
//       count: 50,
//       isLogin:true
//     };
//   }
//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   handleDecrement = () => {
//     this.setState({ count: this.state.count - 1 });
//   };
//   handlereset = () => {
//     this.setState({ count: 0 });
//   };

//   handleEdit = () => {
//    this.setState({isLogin:!this.state.isLogin})
//   };
//   render() {
//     console.log(this.state.count);
//     return (
//       <>
//       <h1>Counter</h1>
//         <div id="Container">
//           <div>{this.state.count}</div>
//           <button onClick={this.handleIncrement} disabled={this.state.count>=100}  >Increment(+)</button>
//           <button onClick={this.handlereset}>Reset</button>
//           <button onClick={this.handleDecrement} disabled={this.state.count<=0} >Decrement(-)</button>
//           <button onClick={this.handleEdit} id="r">{this.state.isLogin?"Login":"Logout"}</button>
//         </div>
//       </>
//     );
//   }
// }
// export default Counter;

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      Count: 98,
      isLogin: true,
    };
  }

  handleIncrement = () => {
    this.setState({ Count: this.state.Count + 1 });
  };
  handleDecrement = () => {
    this.setState({ Count: this.state.Count - 1 });
  };
  handleReset = () => {
    this.setState({ Count: 0 });
  };
  handleEdit=()=>{
    this.setState({isLogin:!this.state.isLogin})
  }

  render() {
    return (
      <>
        <h1>Counter</h1>
        <section id="Container">
          <div>{this.state.Count}</div>
          <div>
            <button
              onClick={this.handleIncrement}
              disabled={this.state.Count >= 100}
            >
              Increment(+)
            </button>
            <button onClick={this.handleReset}>Reset(0)</button>
            <button
              onClick={this.handleDecrement}
              disabled={this.state.Count <= 0}
            >
              Decrement(-)
            </button>
            <button onClick={this.handleEdit}>{this.state.isLogin ? "Login" : "Logout"}</button>
          </div>
        </section>
      </>
    );
  }
}
export default Counter;
