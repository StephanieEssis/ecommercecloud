import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [cartCount, setCartCount] = useState(0);

  // Hook to handle cart count in localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cart.length);

    const handleStorageChange = () => {
      const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(updatedCart.length);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    
    <Navbar className="bg-orange-500 shadow-lg fixed-top" variant="dark" expand="lg">
 <Container>
        {/* Brand and Logo */}
        <Navbar.Brand as={Link} to="/" className="text-blue text-3xl font-bold justify-left">
          E-Shop
        </Navbar.Brand>

        {/* Toggle Button for Small Screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto space-x-4">
            <Nav.Link as={Link} to="/" className="text-blue hover:text-gray-300 transition duration-300 justify-right">
              Accueil
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="text-blue hover:text-gray-300 transition duration-300">
              Produits
            </Nav.Link>
            <NavDropdown title="Plus" id="basic-nav-dropdown" className="text-white">
              <NavDropdown.Item as={Link} to="/about" className="text-gray-700 hover:text-gray-900 transition duration-300">
                À propos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact" className="text-gray-700 hover:text-gray-900 transition duration-300">
                Contact
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Right-aligned Links (Login and Cart) */}
          <Nav className="d-flex align-items-center space-x-4">
            <Nav.Link as={Link} to="/auth" className="text-blue hover:text-gray-300 transition duration-300">
              Se connecter
            </Nav.Link>

            <Nav.Link as={Link} to="/cart" className="text-blue hover:text-gray-300 transition duration-300 flex items-center space-x-1">
              <span role="img" aria-label="cart">🛒</span> <span>Panier ({cartCount})</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
