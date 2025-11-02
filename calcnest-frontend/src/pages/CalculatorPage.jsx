     import { useParams, useNavigate } from 'react-router-dom';
     import { lazy, Suspense } from 'react';
     import '../Calculator.css';

     const calculators = {
       'spi-to-cgpa': lazy(() => import('../calculators/Student/SpiToCgpaCalculator.jsx')),
       'attendance': lazy(() => import('../calculators/Student/AttendanceCalculator.jsx')),
       'grade-predictor': lazy(() => import('../calculators/Student/GradePredictor.jsx')),
       'percentage-to-gpa': lazy(() => import('../calculators/Student/PercentageToGpaConverter.jsx')),
       'emi': lazy(() => import('../calculators/Utility/EmiCalculator.jsx')),
       'age': lazy(() => import('../calculators/Utility/AgeCalculator.jsx')),
       'days-between-dates': lazy(() => import('../calculators/Utility/DaysBetweenDatesCalculator.jsx')),
       'tax': lazy(() => import('../calculators/Utility/TaxCalculator.jsx')),
       'funny-bmi': lazy(() => import('../calculators/Funny/FunnyBmiCalculator.jsx')),
       'crush': lazy(() => import('../calculators/Funny/CrushCalculator.jsx')),
       'mood-luck': lazy(() => import('../calculators/Funny/MoodLuckCalculator.jsx')),
       'sarcasm-level': lazy(() => import('../calculators/Funny/SarcasmLevelCalculator.jsx')),
       
     };

     function CalculatorPage() {
       const { type, calculatorId } = useParams();
       const navigate = useNavigate();
       const CalculatorComponent = calculators[calculatorId];

       if (!CalculatorComponent) {
         return <div className="error">Calculator not found!</div>;
       }

       return (
         <div className="calculator-page">
           <button className="btn back-btn" onClick={() => navigate(`/category/${type}`)}>
             Back to {type.charAt(0).toUpperCase() + type.slice(1)} Calculators
           </button>
           <Suspense fallback={<div>Loading calculator...</div>}>
             <CalculatorComponent />
           </Suspense>
         </div>
       );
     }

     export default CalculatorPage;
     