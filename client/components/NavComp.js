import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const NavComp = ({ handleClick, isLoggedIn }) => (
  <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="./142-1428541_health-icon-png-transparent-png.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Health App
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {isLoggedIn ? (
          <div>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/account">Account</Nav.Link>
              <Nav.Link href="/finddoctor">Find Doctor</Nav.Link>{" "}
              <Button onClick={handleClick}>Logout</Button>
            </Nav>
          </div>
        ) : (
          <div>
            {/* <Navbar.Collapse id="basic-navbar-nav"> */}
            <Nav className="me-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
            {/* </Navbar.Collapse> */}
          </div>
        )}
      </Container>
    </Navbar>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(NavComp);
