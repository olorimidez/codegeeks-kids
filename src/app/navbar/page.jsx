'use client'
import Image from "next/image";
import { Container, Nav, Navbar, Button } from "react-bootstrap";



function Header() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src="/assets/logo.png"
            width="100"
            height="50"
            className="d-inline-block align-top"
            alt="Code-Geeks-Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav icon" />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="text-danger justify-content-end"
        >
          <Nav className="ml-auto px-3">
            <Nav.Link className="text-white fw-bold" href="/">
              HOME
            </Nav.Link>
            <Nav.Link className="text-danger fw-bold" href="/about">
              ABOUT
            </Nav.Link>
    
            <Nav.Link className="text-success fw-bold" href="/blog">
              BLOG
            </Nav.Link>
            <Nav.Link className="text-warning fw-bold" href="/contact">
              CONTACT
            </Nav.Link>
          </Nav>

          <Nav.Link href="/register">
            <Button
              style={{
                background: "transparent",
                border: "2px solid #fff",
                marginLeft: ".5em",
                fontSize: "0.8rem",
                padding: "0.5em 1.5em",
                borderRadius: "15px",
                fontWeight: "bold",
                color: "#c5c5c5",
              }}
            >
              Get Started
            </Button>
          </Nav.Link>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
