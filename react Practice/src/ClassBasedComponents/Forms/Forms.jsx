import { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      submitedData: null,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;
    this.setState({ submitedData: { username, email, password } });
  };
  handleChange = (e) => {
    // console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    //  console.log(this.state.submitedData && this.state.submitedData.email)
    return (
      <>
        <form onSubmit={this.handleSubmit} method="post" name="">
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="username"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="">Email:</label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="">Password:</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" />
        </form>
        <div>
          <h1>{this.state.submitedData && this.state.submitedData.username}</h1>
          <h1>{this.state.submitedData && this.state.submitedData.email}</h1>
          <h1>{this.state.submitedData && this.state.submitedData.password}</h1>
        </div>
      </>
    );
  }
}
export default Form;
