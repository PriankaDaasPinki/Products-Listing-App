/* eslint-disable react/prop-types */
import React from 'react';

const Product = ({ item }) => {
  console.log(item);
  return (
    <article className="product">
      <img src={item.image} alt="" />
      <div className="product__details">
        <h4 className="product__title">{item.title}</h4>
        <p>Price: $ {item.price}</p>
        <p>Rating: {item.rating.rate}/5</p>
        <p className="product__desc">Description: {item.description}</p>
        <button className="product_btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
