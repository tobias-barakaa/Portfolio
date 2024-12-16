import React, { useState } from 'react';
import { Home, Book, FileText, User, Mail } from 'lucide-react';
import Banner from './Banner';
import Profile from './Profile';

const HomePage = () => {
  const [activeItem, setActiveItem] = useState('intro');

  const navItems = [
    { id: 'intro', label: 'Intro', icon: <Home /> },
    { id: 'portfolio', label: 'My Portfolio', icon: <Book /> },
    { id: 'resume', label: 'My Resume', icon: <FileText /> },
    { id: 'about', label: 'About Me', icon: <User /> },
    { id: 'contact', label: 'Contact Me', icon: <Mail /> }
  ];

  return (
    <div className="homepage">
     
     <Profile />
      
      <div className="content">
        

        <Banner />

        <nav className="navigation container">
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
            >
              <span className="nav-icon">
                {React.cloneElement(item.icon, { size: 24 })}
              </span>
              {item.label}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default HomePage;