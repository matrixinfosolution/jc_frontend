import React from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";

function EnquiryForm() {
  return (
    <Form>
      <Row>
        <Col>
          <FormControl
            type="text"
            placeholder="Name"
            className="bg-transparent"
          />
        </Col>
        <Col>
          <FormControl
            type="text"
            placeholder="Mobile Number"
            className="bg-transparent "
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <FormControl
            as="textarea"
            rows={1}
            placeholder="Description"
            className="bg-transparent"
          />
        </Col>
      </Row>
      <div className="d-flex justify-content-end mt-2 mb-1">
        <Button className="bg-success border-0">Submit</Button>
      </div>
    </Form>
  );
}

export default EnquiryForm;
