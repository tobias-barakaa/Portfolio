import { useState } from "react";
import { Home, Briefcase, FileText, User, Phone } from "lucide-react";
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import "./HomePage.css";
import MyResume from "./MyResume";
import AboutMe from "./AboutMe";

const HomePage = () => {
  const [activeItem, setActiveItem] = useState("intro");

  const navItems = [
    { id: "intro", label: "Intro", icon: <Home /> },
    { id: "portfolio", label: "My Portfolio", icon: <Briefcase /> },
    { id: "resume", label: "My Resume", icon: <FileText /> },
    { id: "about", label: "About Me", icon: <User /> },
    { id: "contact", label: "Contact Me", icon: <Phone /> },
  ];

  return (
    <div className="homepages container">
      {/* Navigation */}
      <nav className="navigation">
        {navItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`nav-item ${activeItem === item.id ? "active" : ""}`}
          >
            <div className="nav-icon">{item.icon}</div>
            {item.label}
          </div>
        ))}
      </nav>

      {/* Content */}
      <div className="content">
        {activeItem === "intro" && <Intro />}
        {activeItem === "portfolio" && <Portfolio />}
        {activeItem === "resume" && <MyResume />}
        {activeItem === "about" && <AboutMe />}



      </div>
    </div>
  );
};

export default HomePage;
