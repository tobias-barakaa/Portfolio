import { Container, Row, Col } from 'react-bootstrap';
import { Phone, Mail, Twitter, MessageSquare } from 'lucide-react';
import './ContactMe.css';
import contactImage from './assets/contact.png'; 


const ContactMe = () => {
  return (
    <Container className="contact-container">
      <div className="contact-header">
        <MessageSquare size={32} />
        <h2>Contact Me</h2>
      </div>

      <h6 className="contact-intro">
        Did you like my work? I'm currently seeking full time & contract positions
        in Kansas City, MO or working remotely. I'd love to hear from you.
      </h6>

      <Row className="contact-content">
        <Col md={6} className="contact-image-col">
          <div className="contact-image-wrapper">
            <img src={contactImage} alt="Contact" className="contact-image" />
          </div>
        </Col>

        <Col md={6} className="contact-info">
          <div className="contact-item">
            <Phone size={70} className="contact-icon" />
            <div className="contact-text">
              816.820.4806
            </div>
          </div>

          <div className="contact-item">
            <Mail size={70} className="contact-icon" />
            <div className="contact-text">
              hello@kennysaunders.com
            </div>
          </div>

          <div className="contact-item">
            <Twitter size={70} className="contact-icon" />
            <div className="contact-text">
              <a href="https://twitter.com/kennysaunders" target="_blank" rel="noopener noreferrer">
                twitter.com/kennysaunders
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;