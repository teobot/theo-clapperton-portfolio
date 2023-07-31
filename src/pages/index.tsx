// bootstrap
import { Container, Row, Col } from "react-bootstrap";

// local imports
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import CodeSegment from "@/components/CodeSegment";
import PageHeader from "@/components/PageHeader";
import PageSubheader from "@/components/PageSubheader";

// models
import { ProjectModel } from "@/common/models/project.model";

export default function Home({
  projects,
  details,
}: {
  projects: ProjectModel[];
  details: any;
}) {
  return (
    <Container className="mt-5 mb-5">
      <PageHeader />

      <Container className="mt-5 mb-5 d-flex justify-content-center">
        <CodeSegment details={details} />
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

// get the projects from the database
export async function getStaticProps() {
  const projects: ProjectModel[] = [
    new ProjectModel({
      title: "Timpson Rapidash",
      desc: "A project I created for sending instant messages to our thousands of branches. It uses a Node.Js server and a React.Js front end, including websocket connections for real time updates.",
      img: "https://raw.githubusercontent.com/teobot/bucket/main/portfolio/rapidash-min.jpg",
      order: 1,
    }),
    new ProjectModel({
      title: "Timpson Ponyta",
      desc: "A dashboard for the Timpson Rapidash project. It allows us to send announcements to our thousands of branches, and monitor branch connectivity.",
      img: "https://raw.githubusercontent.com/teobot/bucket/main/portfolio/ponyta-min.png",
      order: 1,
    }),
    new ProjectModel({
      title: "Northern Pride Sports Day",
      desc: "I was commissioned to build a website for the Northern Pride Sports Day. Users can find information about the event and purchase tickets using the Stripe API.",
      img: "https://raw.githubusercontent.com/teobot/bucket/main/portfolio/Northern%20Pride%20Sports-min.png",
      live: "https://northern-pride-sports.vercel.app/",
      github: "",
      order: 1,
    }),
    new ProjectModel({
      title: "Advent of Code",
      desc: `I like to do coding challenges, this is a collection of my solutions.`,
      img: "https://github.com/teobot/bucket/blob/main/portfolio/advent-of-code-min.png?raw=true",
      live: null,
      github: "https://github.com/teobot/advent-of-code",
      order: 3,
    }),
    new ProjectModel({
      title: "Toffy - Tournament Organizer",
      desc: `Toffy is a web application that allows you to create and manage tournaments.`,
      img: "https://github.com/teobot/bucket/blob/main/portfolio/toffyWide.png?raw=true",
      live: "https://toffy.netlify.app/",
      github: "https://github.com/teobot/toffy",
      order: 2,
    }),
    new ProjectModel({
      title: "Estr",
      desc: "This is a web-based application that I developed in my spare time and is now used by the Development team for the Timpson Group for estimating devops work items story points.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/ester-min.png?raw=true",
      github: "https://github.com/teobot/ester-frontend",
      live: "https://estr.netlify.app/",
      order: 2,
    }),
    new ProjectModel({
      title: "Shark.Net",
      desc: "This is a paid commission to build a web application for the Manchester Sharks Waterpolo team website. It includes a CMS for managing Users, Blogs, Contact Messages and page content.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/shark.net-min.png?raw=true",
      live: "https://www.manchester-sharks.co.uk/",
      order: 1,
    }),
    new ProjectModel({
      title: "ACNH App",
      desc: "A small app designed for mobile that allows you to view the prices of ACNH animal items for the game.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/acnh-min.png?raw=true",
      github: "https://github.com/teobot/acnh-animal-helper",
      live: "https://teobot-anch-priceguide.netlify.app/",
      order: 99,
      hidden: true,
    }),
    new ProjectModel({
      title: "2048",
      desc: "This is a simple take on the classic game of 2048. It was built in less than an hour as a challenge.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/2048-min.png?raw=true",
      github: "https://github.com/teobot/2048",
      live: "https://teobot-2048.netlify.app/",
      order: 99,
      hidden: true,
    }),
    new ProjectModel({
      title: "WDrill",
      desc: "Placeholder",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/wdrill-min.png?raw=true",
      github: "https://github.com/teobot/wdrill",
      live: "https://wdrill.vercel.app/",
      order: 99,
      hidden: true,
    }),
    new ProjectModel({
      title: "Zester",
      desc: "Zester is a web application for testing system, you can create items, track progress and get updates when tests are done.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/zester-min.png?raw=true",
      github: "https://github.com/teobot/zester-front-end",
      live: "https://zester.netlify.app/",
      order: 4,
    }),
    new ProjectModel({
      title: "Pretty Screenshots",
      desc: "A typescript app for getting pretty screenshots for README files",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/pretytyscxen-min.png?raw=true",
      github: "https://github.com/teobot/pretty-sceenshots",
      live: "https://prettier-screenshots.netlify.app/",
      order: 99,
      hidden: true,
    }),
    new ProjectModel({
      title: "Support System",
      desc: "Developed for use in the Timpson Development team it allows you to track tickets from phone calls and other sources.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/ticket%20support-min.png?raw=true",
      order: 7,
    }),
    new ProjectModel({
      title: "Coffida",
      desc: "Coffida is a coffee review mobile app, written in react native. Users can favourite, comment and upload images and reviews.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/coffida2.png?raw=true",
      github: "https://github.com/teobot/18055445-coffida-mobile-app",
      live: "",
      order: 3,
    }),
    new ProjectModel({
      title: "Type in Cat",
      desc: "Type in Cat is a fun typography website where you can write and share your own sentences written in cats.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/typeincat.png?raw=true",
      github: "https://github.com/teobot/typeInCat",
      live: "https://type-in-cat.netlify.app/",
      order: 9,
    }),
    new ProjectModel({
      title: "Train Station Finder",
      desc: "Produced during a 2 days Hackathon, this application allows you to find the nearest train station to your current location.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/train-station-app.png?raw=true",
      github: "https://github.com/teobot/Android-Client-Server-App",
      order: 8,
    }),
    new ProjectModel({
      title: "GameGuide",
      desc: "This is a computer game review website. This project uses the PHP, more specifically the framework called CodeIgniter and follows the MVC framework. It also includes a Node.Js server that allows users to chat to each other in real time.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/GameGuide-min.png?raw=true",
      github: "https://github.com/teobot/GameGuide",
      order: 7,
    }),
    new ProjectModel({
      title: "Java Web Service API",
      desc: "This is a web service API that implement all CRUD operations, written in Java. It showcases the use of the Java Servlet API.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/Javaweb-min.png?raw=true",
      github: "https://github.com/teobot/Enterprise-Programming-Web-Service",
      order: 7,
    }),
    new ProjectModel({
      title: "Aircraft Scheduler",
      desc: "This project showcases key components of a system that can plan which plane an airline uses to fly passengers on each of their flights, and choose which pilots and cabin crew are rostered for each flight",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/aircraftsceduler-min.png?raw=true",
      github: "https://github.com/teobot/Airline-Scheduling-System",
      order: 8,
    }),
    new ProjectModel({
      title: "Pokemon Sprite Timeline",
      desc: "This was a fun personal projects that I undertook during my spare time. It shows the evolution of a pokemon species and their sprites.",
      img: "https://github.com/teobot/bucket/blob/main/portfolio/pokemonBanner.png?raw=true",
      github: "https://github.com/teobot/pokemon-sprite-changes",
      live: "https://pokemon-versions.netlify.app/",
      order: 8,
    }),
  ];

  const details = {
    name: "Theo Clapperton",
    bday: "1998-02-06",
    company: "The Timpson Group",
    job: "Software Developer",
  };

  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects)),
      details,
    },
  };
}
