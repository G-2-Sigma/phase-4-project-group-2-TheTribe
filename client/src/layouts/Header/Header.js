import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = ({ user, setUser }) => {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
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
                  {/* Create Post */}
                </Link>
                <Link to="/viewPost" className="navLink">
                  {/* Our Posts */}
                </Link>
              </Nav>
            ) : (
              <Nav className="me-auto">
                <Link to=""></Link>
              </Nav>
            )}
            <Nav className="me-4">
              {user ? (
                <>
                  <NavDropdown
                    title={`Welcome ${user.username}`}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      <Link to="/profile" className="profile__dropdown">
                        My Profile
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      <Link
                        to=""
                        className="navbarBtn"
                        onClick={handleLogoutClick}
                      >
                        Logout
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
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
