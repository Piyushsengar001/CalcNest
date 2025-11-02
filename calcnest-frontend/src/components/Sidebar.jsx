import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const categories = [
    { type: 'student', name: 'Student Tools', emoji: '🎓' },
    { type: 'utility', name: 'Utility Tools', emoji: '💰' },
    { type: 'funny', name: 'Funny Tools', emoji: '😂' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3 className="sidebar-title">Explore Categories</h3>
        <div className="sidebar-decoration">✨</div>
      </div>
      <ul className="sidebar-list">
        {categories.map((cat) => (
          <li key={cat.type} className="sidebar-item">
            <Link to={`/category/${cat.type}`} className="sidebar-link">
              <span className="sidebar-emoji">{cat.emoji}</span>
              <span className="sidebar-text">{cat.name}</span>
              <span className="sidebar-arrow">➡️</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="sidebar-footer">
        <p>Discover more fun!</p>
      </div>
    </aside>
  );
}

export default Sidebar;