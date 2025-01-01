import { Book } from 'lucide-react';
import './Banner.css';

const Banner = ({ heading }) => {
  return (
    <div>
      <div className="portfolio-banner">
        <div className='portfolio-div'>
        <Book size={44} className="portfolio-icon" />
        <span className="portfolio-text">{heading}</span>

        </div>
      </div>
    </div>
  );
};

export default Banner;
