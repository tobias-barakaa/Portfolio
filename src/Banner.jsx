import { Book } from 'lucide-react';
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <div className="portfolio-banner">
          <Book color="red" size={32} className="portfolio-icon" />
          <span className="portfolio-text">My Portfolio</span>
          
        </div>
    </div>
  )
}

export default Banner
