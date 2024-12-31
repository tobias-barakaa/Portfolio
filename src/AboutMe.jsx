import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutMe.css';
import myImage from './assets/hto.jpg'; 


const AboutMe = () => {
  return (
    <Container className="about-container">
      <Row className="about-content">
        <Col md={7} className="about-text">
          <h5 className="about-intro">
            Allow myself to introduce my...<br />
            ya you've already heard that one eh?
          </h5>
          
          <div className="about-description">
            <p>
              Hey there! I'm a passionate web developer with a love for creating beautiful, functional websites. 
              When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
            </p>
            
            <p>
              With a background in computer science and years of hands-on experience, 
              I specialize in building responsive web applications that make a difference. 
              I believe in clean code, user-centric design, and continuous learning.
            </p>

            <p>
              Whether it's crafting elegant front-end interfaces or architecting robust back-end solutions, 
              I'm always up for a new challenge. Let's create something amazing together!
            </p>
          </div>
        </Col>

        <Col md={5} className="about-image-container">
          <div className="image-wrapper">
            <img src={myImage} alt="Profile" className="profile-image" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;