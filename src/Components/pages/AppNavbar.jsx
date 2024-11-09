import React, { useState } from "react";
import { Navbar, Offcanvas, Nav, Container } from "react-bootstrap";

function AppNavbar() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className="me-auto">
            Trevox
          </Navbar.Brand>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="top"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Trevox
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link
                  href="/"
                  active={activeLink === "Home"}
                  onClick={() => handleSetActiveLink("Home")}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#"
                  active={activeLink === "Shop"}
                  onClick={() => handleSetActiveLink("Shop")}
                >
                  Shop
                </Nav.Link>
                <Nav.Link
                  href="#"
                  active={activeLink === "Product"}
                  onClick={() => handleSetActiveLink("Product")}
                >
                  Product
                </Nav.Link>
                <Nav.Link
                  href="#"
                  active={activeLink === "Pages"}
                  onClick={() => handleSetActiveLink("Pages")}
                >
                  Pages
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          {/* User Icon - Always Visible */}
          <Nav>
            <Nav.Link href="#" className="ms-3">
              lg
            </Nav.Link>
            <Nav.Link href="#" className="ms-3">
              WL
            </Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;
