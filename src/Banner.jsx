import { Book } from 'lucide-react';
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <div className="portfolio-banner">
        <div className='portfolio-div'>
        <Book color="red" size={32} className="portfolio-icon" />
        <span className="portfolio-text">My Portfolio</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
