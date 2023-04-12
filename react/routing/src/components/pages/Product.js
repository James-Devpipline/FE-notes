import { Component } from "react";

import products from "../../helpers/mockData.json";
import ProductItem from "../products/ProductItem";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {}
    };

    console.log("Product props: ", props);
  }

  componentDidMount() {
    this.setState({
      product: products.find(
        (item) => item.id === Number(this.props.match.params.id)
      )
    });
  }

  render() {
    return (
      <div>
        <h1>Show Route</h1>
        <ProductItem product={this.state.product} />
      </div>
    );
  }
}
