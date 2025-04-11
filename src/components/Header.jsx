import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Header.css';

const Header = () => {
  const cartCount = useSelector((state) => state.cart.cartItems.length);

  return (
    <header className="header">
      <div className="container flex">
        <Link to="/" className="logo">ShoppyGlobe</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({cartCount})</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
