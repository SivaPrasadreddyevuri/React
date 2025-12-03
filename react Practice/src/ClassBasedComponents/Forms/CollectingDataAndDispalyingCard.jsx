import { Component } from "react";

class CollectingDataAndDispalyingCard extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      age: "",
      group: "",
      phone: "",
      submittedData: null,
    };
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    // const {username,age,group,phone}=this.state
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state)
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, age, group, phone } = this.state;
    this.setState({ submittedData: { username, age, group, phone } });
    // console.log("25",this.state.submittedData)

  };
  render() {
console.log(this.state.submittedData?.username)
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="username"
            onChange={this.handleChange}
          />
          <input
            type="number"
            placeholder="Enter Your Age"
            name="age"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Enter Your Group"
            name="group"
            onChange={this.handleChange}
          />
          <input
            type="tel"
            maxLength={10}
            placeholder="Enter Ph no."
            name="phone"
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
        
      </>
    );
  }
}
export default CollectingDataAndDispalyingCard;
