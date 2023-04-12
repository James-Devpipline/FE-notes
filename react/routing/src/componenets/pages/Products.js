import { Component } from "react";

import products from "../../helpers/mockData.json";
import ProductItem from "../products/ProductItem";

export default class Products extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        products,
        isLoading: false
      });
    }, 1000);
  }

  renderProducts() {
    return this.state.products.map((product) => {
      return <ProductItem key={product.id} product={product} />;
    });
  }

  render() {
    return (
      <div className="products-container">
        <h1>Choose from our Amazing Products</h1>

        <div className="products-grid">
          {this.state.isLoading ? <div>...Loading</div> : this.renderProducts()}
        </div>
      </div>
    );
  }
}
