import { Component } from "react";

class Button extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: true,
    };
  }
  handleClick=()=>{
this.setState({isLogin:!this.state.isLogin})

  }

  render() {
    return (
      <>
        <h1>Tasks</h1>
       1. <button onClick={this.handleClick}>{this.state.isLogin?"Login":"Logout"}</button>
      </>
    );
  }
}
export default Button;
