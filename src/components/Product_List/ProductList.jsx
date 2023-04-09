import React from 'react';
import ProductCard from '../Product_Card/ProductCard';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          image={product.image}
          tag1={product.tag}
          tag2={product.tag}
          title={product.title}
          description={product.description}
          price={product.price}
          offerPrice={product.offerPrice}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default ProductList;