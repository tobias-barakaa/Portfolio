import { Container, Row, Col } from 'react-bootstrap';
import './Portfolio.css';
import Banner from "./Banner"


// Import your project images


import project1 from './assets/project1.png'; 
import project3 from './assets/project3.png'; 
import project2 from './assets/project2.png';


const Portfolio = () => {
  const projects = [
    {
      image: project1,
      title: "TV Web 2010",
      technologies: "React, Node.js, MongoDB"
    },
    {
      image: project2,
      title: "E-commerce Platform",
      technologies: "Angular, Express, PostgreSQL"
    },
    {
      image: project3,
      title: "Social Media App",
      technologies: "Vue.js, Django, Redis"
    }
  ];

  return (
    <Container className="portfolio-container">
      <Banner />
      <div className="portfolio-intro">
        I've had the pleasure of working with some great <span className="highlight">clients / <br />agencies</span> over the years. Here are a few of my favorites.
      </div>

      <Row className="portfolio-grid">
        {projects.map((project, index) => (
          <Col md={4} key={index} className="portfolio-item">
            <div className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <a href="/" className="project-title">{project.title}</a>
              <p className="project-tech">{project.technologies}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;