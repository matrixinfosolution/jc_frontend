import React, { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Row,
  Col,
  Offcanvas,
  Button,
  Spinner,
} from "react-bootstrap";
import { useSelector } from "react-redux";
// import AdminSideBarMenu from "../Appbar/AdminSideBarMenu";
import Loader from "../loader/Loader";

const AdminLayout = ({ children, color = "#fff" }) => {
  const [menudrawer, setMenuDrawer] = useState(false);
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <Loader bal={instanceIsLoading} /> */}

      {/* Navbar */}
      <Navbar bg="secondary" variant="dark" sticky="top" className="px-3">
        <Container fluid>
          <Row className="w-100 align-items-center">
            <Col xs={10} className="d-flex align-items-center gap-2">
              <Button variant="outline-light" onClick={() => setMenuDrawer(true)}>
                <i className="bi bi-list"></i>
              </Button>
              <h3
                onClick={() => (window.location.href = "/admin")}
                style={{ color: "#F5004F", cursor: "pointer" }}
              >
                Jain <span style={{ color: "white" }}>Screen</span>
              </h3>
            </Col>
            <Col xs={2} className="text-end">
              <div
                className="rounded-circle bg-light"
                style={{ height: "30px", width: "30px" }}
              ></div>
            </Col>
          </Row>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container
        fluid
        style={{
          backgroundColor: color,
          minHeight: "100vh",
          paddingTop: "20px",
        }}
      >
        {children}
      </Container>

      {/* Footer */}
      <footer className="text-center mt-auto">
        <div
          style={{ backgroundColor: "#ffe9ff", padding: "10px", width: "100%" }}
        >
          <p className="mb-0">
            Copyright © 2024, All Rights Reserved{" "}
            <span style={{ color: "#F5004F" }}>Jain</span>Screen
          </p>
        </div>
      </footer>

      {/* Sidebar Offcanvas */}
      <Offcanvas show={menudrawer} onHide={() => setMenuDrawer(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* <AdminSideBarMenu /> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AdminLayout;
