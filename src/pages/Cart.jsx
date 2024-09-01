import React, { useState } from 'react';
import pizzas from '../components/pizzas'; 

const Cart = () => {
  const [cart, setCart] = useState(
    pizzas.map(pizza => ({ ...pizza, quantity: 1 }))
  );

  const increaseQuantity = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };


  const decreaseQuantity = (id) => {
    setCart(cart
      .map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
      .filter(item => item.quantity > 0) 
    );
  };

  
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      <div className="row">
        {cart.map(pizza => (
          <div key={pizza.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={pizza.img} alt={pizza.name} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body text-center">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">Precio: ${pizza.price.toLocaleString()}</p>
                <p>Cantidad: {pizza.quantity}</p>
                <button className="btn btn-sm btn-outline-secondary mr-2" onClick={() => increaseQuantity(pizza.id)}>+</button>
                <button className="btn btn-sm btn-outline-secondary" onClick={() => decreaseQuantity(pizza.id)}>-</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center"> {/* Contenedor centrado */}
        <h3>Total: ${total.toLocaleString()}</h3>
        <button className="btn btn-primary">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
