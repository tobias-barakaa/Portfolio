import { Phone, Mail, Twitter } from 'lucide-react';
import './Intro.css';
import profileImg from './assets/port.png'; 

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-image">
        <img src={profileImg} alt="Profile" />
      </div>
      
      
      <p className="intro-text">
        I'm a <span className="highlight">user experience designer / web developer</span> currently working in <span className="highlight">Kansas City, MO</span>. I'm also a father, musician, and Apple geek and spend entirely too much time online.
      </p>
      
      <div className="contact-info">
        <div className="contact-item">
          <Phone size={32} className="contact-icon" />
          <span className="contact-text">Your phone number here</span>
        </div>
        
        <div className="contact-item">
          <Mail size={32} className="contact-icon" />
          <span className="contact-text">tobby@gmail.com</span>
        </div>
        
        <div className="contact-item">
          <Twitter size={32} className="contact-icon" />
          <a href="https://twitter.com/yourusername" className="contact-text" target="_blank" rel="noopener noreferrer">
            Twitter Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;