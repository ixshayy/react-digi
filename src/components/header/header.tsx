import React from "react";
import {Container, Nav, Navbar} from 'react-bootstrap';
import "./header.scss";

const Header : React.FC =  () => {
  return (
    <Navbar expand="lg" className="header-wrapper">
      <Container>
        <Navbar.Brand>React-digi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Draw</Nav.Link>
            <Nav.Link href="/type">type</Nav.Link>
            <Nav.Link href="/sign-pdf">Sign pdf</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;