import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (token && storedUser) setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">CalcNest</h1>
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/feature">Features</Link></li>
          <li><Link to="/about">About</Link></li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;