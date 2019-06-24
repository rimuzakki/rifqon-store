import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
// import styled from "styled-components";
// import { ButtonContainer } from "./Button";
import { Navbar, Nav } from "react-bootstrap";

class NavbarComponent extends Component {
  render() {
    return (
      <Navbar fixed="top" bg="light" expand="lg" className="p-0 border-bottom">
        <div className="container">
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="store" className="navbar-brand" />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarNav" />

          <Navbar.Collapse id="navbarNav">
            <Nav className="nav justify-content-end ml-auto" as="ul">
              <Nav.Item as="li">
                <Link to="/">Home</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/product">Products</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/">About Us</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/">Contact Us</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/cart">
                  <i className="fas fa-shopping-bag" />
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

// const NavWrapper = styled.nav`
//   background: var(--mainBlue);
//   .nav-link {
//     // color: var(--mainWhite) !important;
//     // font-size: 1.3rem;
//     text-transform: capitalize;
//   }
// `;

export default NavbarComponent;
