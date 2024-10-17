import React, { useState } from 'react';
import '../App.css'

const ProductCard = ({ product, addToCart }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="product-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img 
        src={hovered ? product.image2 : product.image1} 
        alt={product.name} 
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>{product.price}</strong></p>
      <button onClick={() => addToCart(product)}>Ajouter au panier</button>
    </div>
  );
};

export default ProductCard;
