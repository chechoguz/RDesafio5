import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const total = 25000; // Este valor puede ser dinámico basado en el carrito de compras
  const token = true; // Indica si el usuario está logueado o no

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Pizzería Mamma Mia!</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link btn btn-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-link" to="/register">Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-link" to="/profile">Profile</Link>
          </li>
        </ul>
        <span className="navbar-text ml-auto">
          <Link to="/cart" className="btn btn-outline-info">🛒 Total: ${total.toLocaleString()}</Link>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
