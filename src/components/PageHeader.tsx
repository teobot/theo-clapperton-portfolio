// boostrap imports
import { Container, Row, Col, Button } from "react-bootstrap";

// data imports
import details from "@/data/details";

export default function PageHeader() {
  return (
    <Container>
      <Row className="d-flex align-items-center">
        <Col sm={12} md={4} className="text-lg-end text-center">
          <Button
            disabled
            style={{ width: 100 }}
            size="sm"
            variant="outline-light"
          >
            Full Stack
          </Button>
        </Col>
        <Col sm={12} md={4} className="p-4 p-sm-0">
          <div className="text-center text-light p-1">
            <h1>
              Hi, I{`'`}m {details.firstName}
            </h1>
            <small className="text-secondary">
              {details.jobTitle} at {details.company}
            </small>
          </div>
        </Col>
        <Col sm={12} md={4} className="text-lg-start text-center">
          <Button
            disabled
            style={{ width: 100 }}
            size="sm"
            variant="outline-light"
          >
            Creator
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
