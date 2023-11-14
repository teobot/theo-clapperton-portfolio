// bootstrap
import { Container, Row, Col } from "react-bootstrap";

// local imports
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import CodeSegment from "@/components/CodeSegment";
import PageHeader from "@/components/PageHeader";
import PageSubheader from "@/components/PageSubheader";

// data imports
import projects from "@/data/projects";
import details from "@/data/details";

export default function Home() {
  return (
    <Container className="mt-5 mb-5">
      <PageHeader />

      <Container className="mt-5 mb-5 d-flex justify-content-center">
        <CodeSegment />
      </Container>

      <PageSubheader />

      <div className="m-5 p-2" />

      <Container>
        <Header>i like to build.</Header>
        <Row className="w-100 mt-4">
          {projects
            .sort((a, b) => {
              let aOrder = a.order || 99;
              let bOrder = b.order || 99;
              return aOrder - bOrder;
            })
            .map((project, index) => {
              if (project.hidden) return null;
              return (
                <Col
                  key={index + project.title}
                  md={6}
                  sm={12}
                  lg={4}
                  className="d-flex justify-content-center"
                >
                  <ProjectCard {...project} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </Container>
  );
}
