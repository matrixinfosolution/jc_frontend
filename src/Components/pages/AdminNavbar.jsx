import React from "react";
import { Container, Navbar, Offcanvas } from "react-bootstrap";
import "../../AdminLayout.css";
import { FaRegUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
function AdminNavbar() {
  return (
    <>
      <Navbar bg="warning" expand={false} className="admin-layout">
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Navlinks
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <NavLink>Home</NavLink>
              <NavLink>Home</NavLink>
              <NavLink>Home</NavLink>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <FaRegUser />
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
