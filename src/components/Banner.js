import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/iconej.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import resume from "../assets/img/Eshita_Jain_resume.pdf"




export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Learner..", "Web Developer..", "Data Scientist..", "Machine Learning Enthusiast.." ];
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio!</span>
                <h1>{`Hey! I'm Eshita Jain.`}<br></br><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Data Scientist", "Machine Learning Expert" ]'><span className="wrap">{text}</span></span></h1>
                  <p><br></br>I am a pre-final year student at IIIT Naya Raipur, pursuing a Bachelor's degree in Computer Science and Engineering. My focus areas include Machine Learning and Deep Learning, Web Development, and Data Science. As a passionate learner, I am always seeking to improve my skills and expand my knowledge in these domains.
                  <br></br>
                  <br></br>
                  I have a decent foundation in programming, with experience in languages such as Python, Java, and C++. In addition, I have worked on projects that involve data analysis and web development.
                  <br></br>
                  <br></br>
                  I am currently seeking opportunities to gain experience and further enhance my skills in the fields of Machine Learning, Web Development, and Data Science. If you would like to collaborate or discuss potential opportunities, please do not hesitate to contact me.</p>
                  <span><a id="Eshita-Jain-Resume" href={resume} download="Eshita-Jain-Resume" target="blank"><button>Download Resume &nbsp;<i class="fa-solid fa-file-arrow-down"></i></button></a>
                  </span>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
