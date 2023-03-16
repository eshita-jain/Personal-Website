import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectCard2 } from "./ProjectCard";
import proj1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project5.png";
import projImg4 from "../assets/img/project3.png";
import projImg5 from "../assets/img/project4.png";
import projImg6 from "../assets/img/project6.png";
import projImg7 from "../assets/img/project7.png";
import projImg8 from "../assets/img/project8.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Brief.ly",
      description: "Custom URL shortener ( Shorten your URL with customization of your own word), Developed using React.JS and MongoDb.",
      imgUrl: proj1,
      link:"https://github.com/eshita-jain/Brief.ly-url-shortner",
    },
    {
      title: "SociaGuru",
      description: "Chat Application with OpenAI and ChatGPT API integration. Techstack - Frontend : Redux Toolkit, Redux Toolkit Query and React Router, Backend : NodeJs and ExpressJs",
      imgUrl: projImg2,
      link:"https://github.com/eshita-jain/SociaGuru",
    },
    {
      title: "Sudoku Solver",
      description: "A 9 x 9 sudoku solver using backtracking approach.",
      imgUrl: projImg3,
      link:"https://github.com/eshita-jain/Sudoku-solver",
    },
    {
      title: "Apartment Management System",
      description: "(Database Management System Project using MySQL and PHP) to manage all the apartments and store all the data, such as check-in and check-out dates and times, Repair activities, vacancies and many more.",
      imgUrl: projImg4,
      link:"https://github.com/eshita-jain/Apartment-Management-System",
    },
    {
      title: "Book Recommendation System",
      description: "A Web app made using flask framework to recommend your favorite book using content based filtering and cosine similarity metrices.",
      imgUrl: projImg5,
      link:"https://github.com/eshita-jain/Recommendation-System",
    },
    {
      title: "To-Do List",
      description: "A Note Making Web-Application. SQLite used as the database for backend. HTML CSS and Javascript Django template are used in frontend. Python (Django) is used for backend",
      imgUrl: projImg6,
      link:"https://github.com/eshita-jain/To-Do-List",
    },

  ];

  const project2 = [
    {
      title: "Scene Based Text-to-Realistic Image Generation",
      description: " Generating scene based high resolution images from standalone text descriptions using Generative Adversarial Network (GAN) on the ImageNet Dataset.",
      imgUrl: projImg8,
      link:"https://github.com/eshita-jain?tab=repositories",
    },
    {
      title: "Medicinal Plant Identification using it's Leaf 🍃",
      description: "ML-based identification of medicinal plants using Deep Learning Model. Libraries used: Tensorflow and Keras",
      imgUrl: projImg7,
      link:"https://github.com/eshita-jain?tab=repositorie",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={2}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          project2.map((project, index) => {
                            return (
                              <ProjectCard2
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>

                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
