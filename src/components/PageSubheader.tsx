import { Container, Row, Col, Button } from "react-bootstrap";

import { BsGithub } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

// data
import details from "@/data/details";

export default function PageSubheader() {
  return (
    <Container>
      <Row>
        <Col
          sm={12}
          md={2}
          className="d-flex justify-content-center justify-content-sm-end align-items-center"
        >
          <Button
            target="_blank"
            href="https://github.com/teobot"
            style={{ width: 125 }}
            variant="outline-light"
            className="d-flex align-items-center justify-content-center"
          >
            <BsGithub size={20} className="me-2" /> Github
          </Button>
        </Col>
        <Col
          sm={12}
          md={8}
          className="text-center p-4 p-sm-0 d-flex justify-content-center align-items-center"
        >
          <p className="lead text-light h-100 m-0">
            {details.subHeader},
            <br />I{`'`}m currently working at {details.company} as a{" "}
            {details.jobTitle}.
          </p>
        </Col>
        <Col
          sm={12}
          md={2}
          className="d-flex justify-content-center justify-content-sm-start align-items-center"
        >
          <Button
            target="_blank"
            href="mailto:theoclapperton@outlook.com"
            style={{ width: 125 }}
            variant="outline-light"
            className="d-flex align-items-center justify-content-center"
          >
            <AiFillMail size={20} className="me-2" /> Contact
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
