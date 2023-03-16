import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/footer.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <a href="#"><img src={logo} alt="Logo" />
            </a>
            
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/eshita-jain-218191202" target="blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/eshita-jain" target="blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/i.eshitajain/" target="blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>
              <i class="fa-solid fa-envelope-circle-check"></i>  &nbsp;Mail: the.eshita.jain@gmail.com<br></br>
              <i class="fa-solid fa-mobile-screen-button"></i>  &nbsp;Phone No. : +91-7610356244<br></br>
              &copy;Copyright @𝐸𝓈𝒽𝒾𝓉𝒶 𝒥𝒶𝒾𝓃 ♡ All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
