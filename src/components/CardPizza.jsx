import React from 'react';

const CardPizza = ({ name, img, desc, ingredients, price }) => {
  return (
    <div className="card mb-4">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body text-center">
        <h5 className="card-title">{`Pizza ${name}`}</h5>
        <p className="card-text">{desc}</p>
        <hr />
        <p><strong>Ingredientes:</strong></p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <hr />
        <p className="card-price"><strong>Precio: ${price.toLocaleString()}</strong></p>
        <button className="btn btn-outline-secondary btn-sm mr-2">Ver Más <span role="img" aria-label="eyes">👀</span></button>
        <button className="btn btn-dark btn-sm">Añadir <span role="img" aria-label="cart">🛒</span></button>
      </div>
    </div>
  );
};

export default CardPizza;