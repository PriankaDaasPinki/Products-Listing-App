/* eslint-disable react/prop-types */
import React from "react";
import { Card } from "react-bootstrap";
import State from "./State";

const Product = ({ item }) => {
  console.log(item);
  return (
    <Card className="product">
      <Card.Img src={item.image} />
      <Card.Body className="product__details">
        <Card.Title className="product__title">{item.title}</Card.Title>
        <p>Price: $ {item.price}</p>
        <p>Rating: {item.rating.rate}/5</p>
        <Card.Text className="product__desc">
          Description: {item.description}
        </Card.Text>
        <p>
          <State />
        </p>
        {/* <div>
          
          {/* <Button variant="primary"
            onClick={State.handleCartItemValue}>+</Button>Add to cart
          <Button
            variant="primary"
            onClick={State.handleCartItemValue}
          ></Button> 
        </div> */}
      </Card.Body>
    </Card>
  );
};

export default Product;
