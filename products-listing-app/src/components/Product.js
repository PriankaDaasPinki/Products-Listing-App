/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';
import State from './State';

const Product = ({ item }) => {
  console.log(item);
  return (
    <div>
      <State />{' '}
    </div>
  );
};

export default Product;
