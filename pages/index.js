import { Container, Row, Col } from "react-bootstrap";

import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

import styles from "../styles/Home.module.css";

export default function Home({ projects }) {
  return (
    <Container>
      <Container>
        <Header>i like to build</Header>

        <Row className="w-100 mt-4">
          {projects.map((project, index) => {
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

// get the projects from the database
export async function getServerSideProps(context) {
  const projects = [
    {
      title: "Toffy - Tournament Organizer",
      desc: `Toffy is a web application that allows you to create and manage tournaments.`,
      img: "https://github.com/teobot/bucket/blob/main/portfolio/toffyWide.png?raw=true",
      live: "https://toffy.netlify.app/",
      github: "https://github.com/teobot/toffy",
    },
    {
      title: "Estr",
      desc: "This is a web-based application that I developed in my spare time and is now used by the Development team for the Timpson Group for estimating devops work items story points.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/ester-min.png?raw=true",
      github: "https://github.com/teobot/ester-frontend",
      live: "https://estr.netlify.app/",
    },
    {
      title: "Shark.net",
      desc: "Placeholder",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/ester-min.png?raw=true",
      github: "Placeholder",
      live: "Placeholder",
    },
    {
      title: "ACNH App",
      desc: "Placeholder",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/ester-min.png?raw=true",
      github: "Placeholder",
      live: "Placeholder",
    },
    {
      title: "2048",
      desc: "Placeholder",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/ester-min.png?raw=true",
      github: "Placeholder",
      live: "Placeholder",
    },
    {
      title: "WDrill",
      desc: "Placeholder",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/coffida2.png?raw=true",
      github: "Placeholder",
      live: "Placeholder",
    },
    {
      title: "Wordle",
      desc: "Placeholder",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/coffida2.png?raw=true",
      github: "Placeholder",
      live: "Placeholder",
    },
    {
      title: "Zester",
      desc: "Placeholder",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/coffida2.png?raw=true",
      github: "Placeholder",
      live: "Placeholder",
    },
    {
      title: "Pretty Screenshots",
      desc: "Placeholder",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/coffida2.png?raw=true",
      github: "Placeholder",
      live: "Placeholder",
    },
    {
      title: "Support System",
      desc: "Placeholder",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/coffida2.png?raw=true",
      github: "Placeholder",
      live: "Placeholder",
    },
    {
      title: "Phase 10 Tracker",
      desc: "Placeholder",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/coffida2.png?raw=true",
      github: "Placeholder",
      live: "Placeholder",
    },
    {
      title: "placeholder",
      desc: "Placeholder",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/coffida2.png?raw=true",
      github: "Placeholder",
      live: "Placeholder",
    },
    {
      title: "Coffida",
      desc: "Coffida is a coffee review mobile app, written in react native. Users can favourite, comment and upload images and reviews.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/coffida2.png?raw=true",
      github: "https://github.com/teobot/18055445-coffida-mobile-app",
      live: "",
    },
    {
      title: "Type in Cat",
      desc: "Type in Cat is a fun typography website where you can write and share your own sentences written in cats.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/typeincat.png?raw=true",
      github: "https://github.com/teobot/typeInCat",
      live: "https://type-in-cat.netlify.app/",
    },
    {
      title: "Train Station Finder",
      desc: "Produced during a 2 days Hackathon, this application allows you to find the nearest train station to your current location.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/train-station-app.png?raw=true",
      github: "https://github.com/teobot/Android-Client-Server-App",
      live: "",
    },
    {
      title: "GameGuide",
      desc: "This is a computer game review website. This project uses the PHP, more specifically the framework called CodeIgniter and follows the MVC framework. It also includes a Node.Js server that allows users to chat to each other in real time.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/GameGuide-min.png?raw=true",
      github: "https://github.com/teobot/GameGuide",
      live: "",
    },
    {
      title: "Java Web Service API",
      desc: "This is a web service API that implement all CRUD operations, written in Java. It showcases the use of the Java Servlet API.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/Javaweb-min.png?raw=true",
      github: "https://github.com/teobot/Enterprise-Programming-Web-Service",
      live: "",
    },
    {
      title: "Aircraft Scheduler",
      desc: "This project showcases key components of a system that can plan which plane an airline uses to fly passengers on each of their flights, and choose which pilots and cabin crew are rostered for each flight",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/aircraftsceduler-min.png?raw=true",
      github: "https://github.com/teobot/Airline-Scheduling-System",
      live: "",
    },
    {
      title: "Pokemon Sprite Timeline",
      desc: "This was a fun personal projects that I undertook during my spare time. It shows the evolution of a pokemon species and their sprites.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/pokemonBanner.png?raw=true",
      github: "https://github.com/teobot/pokemon-sprite-changes",
      live: "https://pokemon-versions.netlify.app/",
    },
  ];

  return {
    props: {
      projects,
    },
  };
}
