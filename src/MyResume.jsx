import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Download } from 'lucide-react';
import './MyResume.css';

const MyResume = () => {
  return (
    <Container className="resume-container">
      <h2 className="resume-title">My Resume</h2>
      
      <h4 className="resume-subtitle">
        I'm a user experience designer / web developer.<br />
        Here's my current resume, download a copy below.
      </h4>

      <Row className="resume-content">
        <Col md={8} className="resume-left">
          <div className="resume-section">
            <h3>Summary</h3>
            <p>
              Dedicated and efficient full stack developer with 5+ years experience in application 
              layers, presentation layers, and databases. Certified in both F/E and B/E technologies. 
              Spearheaded successful transition from MEAN to MERN stack. Passionate about UI/UX. 
              Regular attendee of web developer meetups and hackathons.
            </p>
          </div>

          <div className="resume-section">
            <h3>Skills & Qualifications</h3>
            <ul>
              <li>Bachelor's Degree in Computer Science</li>
              <li>Full Stack Web Development Certification</li>
              <li>Advanced Problem-Solving Skills</li>
              <li>Strong Team Collaboration</li>
            </ul>
          </div>

          <div className="resume-section">
            <h3>Technologies</h3>
            <ul>
              <li>Frontend: React, Angular, Vue.js</li>
              <li>Backend: Node.js, Python, Ruby</li>
              <li>Databases: MongoDB, PostgreSQL</li>
              <li>Tools: Git, Docker, AWS</li>
            </ul>
          </div>

          <div className="resume-section">
            <h3>Work Experience</h3>
            <div className="experience-item">
              <h4>Senior Developer - Tech Corp</h4>
              <p className="date">2020 - Present</p>
              <p>Led development team in creating modern web applications using React and Node.js.</p>
            </div>
            <div className="experience-item">
              <h4>Web Developer - Digital Solutions</h4>
              <p className="date">2018 - 2020</p>
              <p>Developed and maintained multiple client websites using various technologies.</p>
            </div>
          </div>

          <div className="resume-section">
            <h3>Interests & Activities</h3>
            <ul>
              <li>Open Source Contributing</li>
              <li>Tech Meetups Organization</li>
              <li>Hackathon Participation</li>
            </ul>
          </div>

          <div className="resume-section">
            <h3>References</h3>
            <p>Available upon request</p>
          </div>
        </Col>

        <Col md={4} className="resume-right">
          <div className="download-section">
            <button className="retro-button">
              View Resume
            </button>
            <button className="retro-button download-button">
              <Download size={16} />
              Download
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyResume;