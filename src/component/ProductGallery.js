import React from 'react';
import ProductCard from './ProductCard';
import '../App.css'

const ProductGallery = ({ products, addToCart }) => (
    <div className="product-gallery">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
  
  export default ProductGallery;