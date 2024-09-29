import React from "react";
import Products from "./components/Products";
import products from "./Data";

import { FiShoppingCart } from "react-icons/fi";

const App = () => {
  return (
    <div>
      <div className="heading row">
        <div className="col-md-10 title">
          <h1>BD Store</h1>
        </div>
        <div className="col-md-2 cart">
          <p className="cartItemCount">0</p>
          <span className="icon">
            <FiShoppingCart />
          </span>
        </div>
      </div>
      <Products products={products} />
    </div>
  );
};

export default App;
