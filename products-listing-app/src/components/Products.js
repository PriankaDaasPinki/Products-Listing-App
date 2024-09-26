/* eslint-disable react/prop-types */
import React from "react";
import Product from "./Product";

export default function Products(props) {
  const { products } = props;
  const items = products.map((product) => {
    return <Product key={product.id} item={product} />;
  });
  return <div className="products">{items}</div>;
}
