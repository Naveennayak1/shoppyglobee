import React from 'react';
import ProductItem from './ProductItem';
import useFetch from '../hooks/useProducts';
import '../styles/ProductList.css';

const ProductList = () => {
  const { data: products, loading, error } = useFetch('https://dummyjson.com/products');

  if (loading) return <div className="center">Loading products...</div>;
  if (error) return <div className="center error">{error}</div>;

  return (
    <div className="product-list container">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
