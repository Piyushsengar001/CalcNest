import { useParams, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';
import './CategoryPage.css';

function CategoryPage() {
  const { type } = useParams();

  const calculators = {
    student: [
      { id: 'spi-to-cgpa', name: 'SPI to CGPA Calculator' },
      { id: 'attendance', name: 'Attendance Calculator' },
      { id: 'grade-predictor', name: 'Grade Predictor' },
      { id: 'percentage-to-gpa', name: 'Percentage to GPA Converter' },
    ],
    utility: [
      { id: 'emi', name: 'EMI Calculator' },
      { id: 'age', name: 'Age Calculator' },
      { id: 'days-between-dates', name: 'Days Between Dates' },
      { id: 'tax', name: 'Tax Calculator' },
     
    ],
    funny: [
      { id: 'funny-bmi', name: 'Funny BMI Calculator' },
      { id: 'crush', name: 'Crush Calculator' },
      { id: 'mood-luck', name: 'Mood/Luck Calculator' },
      { id: 'sarcasm-level', name: 'Sarcasm Level Calculator' },
    ],
  };

  const categoryCalculators = calculators[type] || [];

  return (
    <div className="category-page">
      <Sidebar />
      <div className="content">
        <h2>{type.charAt(0).toUpperCase() + type.slice(1)} Tools</h2>
        <div className="grid">
          {categoryCalculators.map((calc) => (
            <Link key={calc.id} to={`/category/${type}/${calc.id}`} className="card calc-button">
              <h3>{calc.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;