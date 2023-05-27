import React from 'react';
import logo from '../../assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import './NavBar.css';
import { LinkContainer } from 'react-router-bootstrap'
import { useState } from 'react';
import useCartContext from '../../context/CartContext';

function NavBar(props) {
  const [expanded, setExpanded] = useState(false);
  const { contextFunction } = useCartContext();
  contextFunction();
  return (
    <header>
      <nav>
        <Navbar expanded={expanded} className="headlogbg" expand="lg">
          <Container>
            <LinkContainer to="/"><Navbar.Brand className="swirl-in-fwd"><img className="navbar-brand" src={logo} alt="logo" /></Navbar.Brand></LinkContainer>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                  <LinkContainer onClick={() => setExpanded(false)} to="/"><NavDropdown.Item>Todo</NavDropdown.Item></LinkContainer>
                  <LinkContainer onClick={() => setExpanded(false)} to="/category/mac"><NavDropdown.Item>Mac</NavDropdown.Item></LinkContainer>
                  <LinkContainer onClick={() => setExpanded(false)} to="/category/ipad"><NavDropdown.Item>iPad</NavDropdown.Item></LinkContainer>
                  <LinkContainer onClick={() => setExpanded(false)} to="/category/iphone"><NavDropdown.Item>iPhone</NavDropdown.Item></LinkContainer>
                  <LinkContainer onClick={() => setExpanded(false)} to="/category/watch"><NavDropdown.Item>Watch</NavDropdown.Item></LinkContainer>
                  <LinkContainer onClick={() => setExpanded(false)} to="/category/airpods"><NavDropdown.Item>AirPods</NavDropdown.Item></LinkContainer>
                  <LinkContainer onClick={() => setExpanded(false)} to="/category/accesorios"><NavDropdown.Item>Accesorios</NavDropdown.Item></LinkContainer>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <CartWidget />
          </Container>
        </Navbar>
      </nav>
    </header>
  );
}

export default NavBar;