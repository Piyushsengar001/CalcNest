import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';


const categories = [
  { title: 'Student Tools', emoji: '🎓', type: 'student', bgImage: '/images/student-bg.jpg' },
  { title: 'Utility Tools', emoji: '💰', type: 'utility', bgImage: '/images/utility-bg.jpg' },
  { title: 'Funny Tools', emoji: '😂', type: 'funny', bgImage: '/images/funny-bg.jpg' },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to CalcNest!</h1>
      <p className="home-subheading">Choose a category to explore calculators.</p>

      <div className="categories-grid">
        {categories.map(({ title, emoji, type, bgImage }) => (
          <div
            key={type}
            className="category-card"
            style={{ backgroundImage: `url(${bgImage})` }}
            onClick={() => navigate(`/category/${type}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate(`/category/${type}`)}
          >
            <div className="overlay" />
            <div className="category-content">
              <span className="category-emoji">{emoji}</span>
              <h2 className="category-title">{title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;