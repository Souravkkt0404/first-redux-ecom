import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";


const NavbarPanel = () => {
  const cartProducts = useSelector(state => state.cart );

  return (
    <>
      <Navbar bg="light" expand="lg" className="sticky-top">
        <Container fluid>
          <Navbar.Brand href="#">React-Redux</Navbar.Brand>
          <Nav>
            <Nav.Link to="/" as={Link}>Products
            </Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav.Link to="/cart" as={Link}>
                My Bag {cartProducts.length}
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarPanel;
