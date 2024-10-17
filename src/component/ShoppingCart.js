import React from 'react';
import '../App.css'

const ShoppingCart = ({ cartItems }) => {
    const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);
  
    const handlePayment = () => {
      alert(`Total: ${total.toFixed(2)}€ - Paiement en cours...`);
    };
  
    return (
      <div className="shopping-cart">
        <h2>Votre Panier</h2>
        {cartItems.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <p>{item.name}</p>
                <p>{item.price}€</p>
              </div>
            ))}
            <div className="total">
              <p><strong>Total:</strong> {total.toFixed(2)}€</p>
            </div>
            <button className="pay-button" onClick={handlePayment}>
              Payer maintenant
            </button>
          </>
        )}
      </div>
    );
  };
  
  export default ShoppingCart;