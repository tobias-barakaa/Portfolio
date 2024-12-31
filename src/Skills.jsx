import './Skills.css';
// import skillsImage from './assets/Imean.jpeg'; 
// import skillsImage from './assets/tobss.jpg'; 
import skillsImage from './assets/hto.jpg'; 



const Skills = () => {
  const skillsList = [
    "React",
    "Flask (Python)",

    "Angular",
    "Node.js",
    "Express",

    "Django (Python)",
    // "Elixir (Learning)",
    "Nest.js",
    "Next.js",
    // "Tailwind CSS",
    // "Bootstrap",
    // "Pure CSS",
    // "Styled Components",
    // "Microservices",
    // "Docker",
    // "Nginx"
  ];

  return (
    <div className="skills-container">
      {/* <div className="skills-image">
        <img src={skillsImage} alt="Skills illustration" />
      </div> */}
      <div className="skills-content">
        <h2 className="skills-heading">Skills</h2>
        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div key={index} className={`skill-box skill-color-${index % 4}`}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;