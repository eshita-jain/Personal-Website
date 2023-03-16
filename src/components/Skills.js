import cpp from "../assets/img/c++.svg";
import python from "../assets/img/python.svg";
import html from "../assets/img/html-5.svg";
import css from "../assets/img/css3.svg";
import js from "../assets/img/javascript.svg";
import tensorflow from "../assets/img/tensorflow.svg";
import node from "../assets/img/node-js.svg";
import react from "../assets/img/react.svg";
import flask from "../assets/img/flask.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import mongo from "../assets/img/mongodb.png";
import sql from "../assets/img/mysql.svg";
import git from "../assets/img/git.svg";
import django from "../assets/img/django.svg";
import filmora from "../assets/img/filmora.svg";
import photoshop from "../assets/img/photoshop.svg";
import premiere from "../assets/img/premiere-pro.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p> Data Structure and Algorithm, AIML, Data Analytics, Deep Learning, IOT, 
                        <br></br>Database Management System, Full Stack Web Developer, CS Fundamentals,SQL. </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={cpp} alt="Image" />
                                <h5>CPP</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={tensorflow} alt="Image" />
                                <h5>Tensorflow</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>Node-JS</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React-JS</h5>
                            </div>
                            <div className="item">
                                <img src={mongo} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={flask} alt="Image" />
                                <h5>Flask</h5>
                            </div>
                            <div className="item">
                                <img src={django} alt="Image" />
                                <h5>Django</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            {/* <div className="item">
                                <img src={filmora} alt="Image" />
                                <h5>Filmora</h5>
                            </div> */}
                            <div className="item">
                                <img src={photoshop} alt="Image" />
                                <h5>Photoshop</h5>
                            </div>
                            <div className="item">
                                <img src={premiere} alt="Image" />
                                <h5>Premiere-Pro</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
