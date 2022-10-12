import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = ({ user, setUser }) => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="navbarBg" variant="light">
        <Container>
          <Navbar.Brand to="/" className="navbarBrandLogo">
            <Link to="/" className="link">
              <span className="greatVibes logo fs-1 fw-bold">TheTribeBlog</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {user ? (
              <Nav className="me-auto">
                <Link to="/post" className="navLink">
                  Create Post
                </Link>
                <Link to="/viewPost" className="navLink">
                  Our Posts
                </Link>
              </Nav>
            ) : (
              <Nav className="me-auto">
                <Link to=""></Link>
              </Nav>
            )}
            <Nav className="me-4">
              {user ? (
                <Link to="" className="navbarBtn">
                  Logout
                </Link>
              ) : (
                <>
                  <Link to="/signup" className="navbarBtn me-3">
                    Register
                  </Link>

                  <Link to="/signin" className="navbarBtn">
                    Log In
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
