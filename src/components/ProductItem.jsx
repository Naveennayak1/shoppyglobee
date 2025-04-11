import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';
import '../styles/ProductItem.css';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} />
        <h3>{product.title}</h3>
      </Link>
      <p>${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
