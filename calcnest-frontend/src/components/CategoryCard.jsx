import { Link } from 'react-router-dom';
import './CategoryCard.css';

function CategoryCard({ title, emoji, type }) {
  return (
    <Link to={`/category/${type}`} className="card category-card">
      <h3>{emoji} {title}</h3>
    </Link>
  );
}

export default CategoryCard;