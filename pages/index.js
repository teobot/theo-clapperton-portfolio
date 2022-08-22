import { differenceInYears } from "date-fns";

import { Container, Row, Col, Nav, Button } from "react-bootstrap";

import { BsGithub } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

export default function Home({ projects, details }) {
  return (
    <Container className="mt-5 mb-5">
      <Container className="d-flex flex-row justify-content-evenly align-items-center">
        <Button
          disabled
          style={{ width: 100 }}
          size="sm"
          variant="outline-light"
        >
          Full Stack
        </Button>
        <div className="text-center">
          <h1>Hi, I{`'`}m Theo</h1>
          <small className="text-secondary">
            Software Developer at Timpson
          </small>
        </div>
        <Button
          disabled
          style={{ width: 100 }}
          size="sm"
          variant="outline-light"
        >
          Creator
        </Button>
      </Container>

      <Container className="mt-5 mb-5 d-flex justify-content-center">
        <div className="bg-dark p-3">
          <div className="d-flex flex-row mb-3">
            <div className="circle bg-success h-15px w-15px me-2" />
            <div className="circle bg-warning h-15px w-15px me-2" />
            <div className="circle bg-danger h-15px w-15px" />
          </div>
          <div className="snippet-container">
            <div className="d-flex flex-row spacer property">
              <div className="text-warning">class</div>
              <div className="text-info">Me</div>
              <div>{`{`}</div>
            </div>
            <div className="code-container ps-4">
              <div className="property">
                <div className="visability text-warning">public</div>
                <div className="type text-success2">string</div>
                <div className="name text-info">Name</div>
                <div className="equals text-success2">=</div>
                <div className="value text-info">{`"${details.name}"`}</div>
                <div className="end">;</div>
              </div>

              <div className="property">
                <div className="visability text-warning">public</div>
                <div className="type text-success2">int</div>
                <div className="name text-info">Level</div>
                <div className="equals text-success2">=</div>
                <div className="value text-danger">
                  {differenceInYears(new Date(), new Date(details.bday))}
                </div>
                <div className="end">;</div>
              </div>

              <div className="property">
                <div className="visability text-warning">public</div>
                <div className="type text-success2">string</div>
                <div className="name text-info">Company</div>
                <div className="equals text-success2">=</div>
                <div className="value text-info">{`"${details.company}"`}</div>
                <div className="end">;</div>
              </div>

              <div className="property">
                <div className="visability text-warning">public</div>
                <div className="type text-success2">Job</div>
                <div className="name text-info">myJob</div>
                <div className="equals text-success2">=</div>
                <div className="d-flex flex-row spacer value">
                  <div className="text-warning">new</div>
                  <div className="text-info p-0">{`Job("${details.job}")`}</div>
                </div>
                <div className="end">;</div>
              </div>
            </div>
            <div className="d-flex flex-row spacer property">
              <div>{`}`}</div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="text-center d-flex justify-content-evenly align-items-center pt-4">
        <Button
          target="_blank"
          href="https://github.com/teobot"
          style={{ width: 125 }}
          variant="outline-light"
          className="d-flex align-items-center justify-content-center"
        >
          <BsGithub size={20} className="me-2" /> Github
        </Button>
        <p className="lead text-light">
          I{`'`}m a software developer with a passion for creating software that
          solve problems,
          <br />I{`'`}m currently working at Timpson as a full-stack software
          developer.
        </p>
        <Button
          target="_blank"
          href="mailto:theoclapperton@outlook.com"
          style={{ width: 125 }}
          variant="outline-light"
          className="d-flex align-items-center justify-content-center"
        >
          <AiFillMail size={20} className="me-2" /> Contact
        </Button>
      </Container>

      <div className="m-5 p-2" />

      <Container>
        <Header>i like to build</Header>
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

// get the projects from the database
export async function getStaticProps() {
  const projects = [
    {
      title: "Toffy - Tournament Organizer",
      desc: `Toffy is a web application that allows you to create and manage tournaments.`,
      img: "https://github.com/teobot/bucket/blob/main/portfolio/toffyWide.png?raw=true",
      live: "https://toffy.netlify.app/",
      github: "https://github.com/teobot/toffy",
      order: 2,
    },
    {
      title: "Estr",
      desc: "This is a web-based application that I developed in my spare time and is now used by the Development team for the Timpson Group for estimating devops work items story points.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/ester-min.png?raw=true",
      github: "https://github.com/teobot/ester-frontend",
      live: "https://estr.netlify.app/",
      order: 2,
    },
    {
      title: "Shark.Net",
      desc: "This is a paid commission to build a web application for the Manchester Sharks Waterpolo team website. It includes a CMS for managing Users, Blogs, Contact Messages and page content.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/shark.net-min.png?raw=true",
      live: "https://www.manchester-sharks.co.uk/",
      order: 1,
    },
    {
      title: "ACNH App",
      desc: "A small app designed for mobile that allows you to view the prices of ACNH animal items for the game.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/acnh-min.png?raw=true",
      github: "https://github.com/teobot/acnh-animal-helper",
      live: "https://teobot-anch-priceguide.netlify.app/",
      order: 99,
      hidden: true,
    },
    {
      title: "2048",
      desc: "This is a simple take on the classic game of 2048. It was built in less than an hour as a challenge.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/2048-min.png?raw=true",
      github: "https://github.com/teobot/2048",
      live: "https://teobot-2048.netlify.app/",
      order: 99,
      hidden: true,
    },
    {
      title: "WDrill",
      desc: "Placeholder",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/wdrill-min.png?raw=true",
      github: "https://github.com/teobot/wdrill",
      live: "https://wdrill.vercel.app/",
      order: 99,
      hidden: true,
    },
    {
      title: "Zester",
      desc: "Zester is a web application for testing system, you can create items, track progress and get updates when tests are done.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/zester-min.png?raw=true",
      github: "https://github.com/teobot/zester-front-end",
      live: "https://zester.netlify.app/",
      order: 4,
    },
    {
      title: "Pretty Screenshots",
      desc: "A typescript app for getting pretty screenshots for README files",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/pretytyscxen-min.png?raw=true",
      github: "https://github.com/teobot/pretty-sceenshots",
      live: "https://prettier-screenshots.netlify.app/",
      order: 99,
      hidden: true,
    },
    {
      title: "Support System",
      desc: "Developed for use in the Timpson Development team it allows you to track tickets from phone calls and other sources.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/ticket%20support-min.png?raw=true",
      order: 7,
    },
    {
      title: "Coffida",
      desc: "Coffida is a coffee review mobile app, written in react native. Users can favourite, comment and upload images and reviews.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/coffida2.png?raw=true",
      github: "https://github.com/teobot/18055445-coffida-mobile-app",
      live: "",
      order: 3,
    },
    {
      title: "Type in Cat",
      desc: "Type in Cat is a fun typography website where you can write and share your own sentences written in cats.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/typeincat.png?raw=true",
      github: "https://github.com/teobot/typeInCat",
      live: "https://type-in-cat.netlify.app/",
      order: 9,
    },
    {
      title: "Train Station Finder",
      desc: "Produced during a 2 days Hackathon, this application allows you to find the nearest train station to your current location.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/train-station-app.png?raw=true",
      github: "https://github.com/teobot/Android-Client-Server-App",
      order: 8,
    },
    {
      title: "GameGuide",
      desc: "This is a computer game review website. This project uses the PHP, more specifically the framework called CodeIgniter and follows the MVC framework. It also includes a Node.Js server that allows users to chat to each other in real time.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/GameGuide-min.png?raw=true",
      github: "https://github.com/teobot/GameGuide",
      order: 7,
    },
    {
      title: "Java Web Service API",
      desc: "This is a web service API that implement all CRUD operations, written in Java. It showcases the use of the Java Servlet API.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/Javaweb-min.png?raw=true",
      github: "https://github.com/teobot/Enterprise-Programming-Web-Service",
      order: 7,
    },
    {
      title: "Aircraft Scheduler",
      desc: "This project showcases key components of a system that can plan which plane an airline uses to fly passengers on each of their flights, and choose which pilots and cabin crew are rostered for each flight",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/aircraftsceduler-min.png?raw=true",
      github: "https://github.com/teobot/Airline-Scheduling-System",
      order: 8,
    },
    {
      title: "Pokemon Sprite Timeline",
      desc: "This was a fun personal projects that I undertook during my spare time. It shows the evolution of a pokemon species and their sprites.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/pokemonBanner.png?raw=true",
      github: "https://github.com/teobot/pokemon-sprite-changes",
      live: "https://pokemon-versions.netlify.app/",
      order: 8,
    },
  ];

  const details = {
    name: "Theo Clapperton",
    bday: "1998-02-06",
    company: "The Timpson Group",
    job: "Software Developer",
  };

  return {
    props: {
      projects,
      details,
    },
  };
}
