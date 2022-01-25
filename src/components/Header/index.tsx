import React from "react";
import { Button, Container, Form, FormControl, Navbar } from "react-bootstrap";
import icon from "../../util/image/Icon.png";
import "../../css/Header.css";

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={icon}
            width="30"
            height="30"
            className="d-inline-block align-top icon"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          className="justify-content-md-center"
        >
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Pokemon "
              className="me-2 input-search"
              aria-label="Search"
            />
            <Button variant="outline" className="button-Search">
              catch!
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
