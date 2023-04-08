import React from 'react';
import ProductCard from '../Product_Card/ProductCard';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          tag={product.tag}
        />
      ))}
    </div>
  );
};

export default ProductList;