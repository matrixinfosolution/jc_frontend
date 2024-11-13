import React, { useState } from "react";
import { Card, Col, Nav, Row } from "react-bootstrap";
import MainProduct from "./MainProduct";
import SubProduct from "./SubProduct";
import Product from "./Product";

function MainTabs() {
  const [activeTab, setActiveTab] = useState("Main Product");

  const renderContent = () => {
    switch (activeTab) {
      case "Main Product":
        return <MainProduct />;
      case "Sub Product":
        return <SubProduct />;
      case "Product":
        return <Product />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Card className="mt-2 bg-primary">
        <Row>
          <Nav
            variant="underline"
            activeKey={activeTab}
            onSelect={(eventKey) => setActiveTab(eventKey)}
          >
            <Col className="text-center">
              <Nav.Item>
                <Nav.Link eventKey="Main Product">Main Product</Nav.Link>
              </Nav.Item>
            </Col>
            <Col className="text-center">
              <Nav.Item>
                <Nav.Link eventKey="Sub Product">Sub Product</Nav.Link>
              </Nav.Item>
            </Col>
            <Col className="text-center">
              <Nav.Item>
                <Nav.Link eventKey="Product">Product</Nav.Link>
              </Nav.Item>
            </Col>
          </Nav>
        </Row>
      </Card>
      <div>{renderContent()}</div>
    </div>
  );
}

export default MainTabs;
