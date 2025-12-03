import { Component } from "react";
class ApiCallAndDisplyCards extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

//fetching/Calling API
  getProducts = async () => {
    const url = await fetch("https://fakestoreapi.com/products");
    const data = await url.json();
    this.setState({ data: data });
  };

  //It Calls Only Once(MountingPhase)
  componentDidMount() {
    this.getProducts();
  }

  render() {
    console.log(this.state.data);
    const { data } = this.state;
    return (
      <>
        {data.map((value, index) => {
          return (
            <div key={index} id="container" className="product-card">
              <h2 className="card-title">{value.title}</h2>
              <p className="card-price">{value.price}</p>
              <p className="card-description">{value.description}</p>
              <p className="card-category">{value.category}</p>
              <p className="card-image">{value.image}</p>
            </div>
          );
        })}
      </>
    );
  }
}
export default ApiCallAndDisplyCards;
