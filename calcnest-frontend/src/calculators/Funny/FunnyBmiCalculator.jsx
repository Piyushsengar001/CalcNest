import { useState } from 'react';
import { mockApi } from '../../api/mockApi.js';

function FunnyBmiCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const calculate = async () => {
    if (!weight || !height || weight <= 0 || height <= 0) {
      alert('Please enter valid weight and height.');
      return;
    }
    setLoading(true);
    const bmi = (weight / (height * height)).toFixed(2);
    const response = await mockApi.generateFunnyBmiMessage(bmi);
    setResult(`Your BMI is ${bmi}. ${response}`);
    setLoading(false);
  };

  return (
    <div className="calculator">
      <h2>Funny BMI Calculator</h2>
      <input
        type="number"
        className="input"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        className="input"
        placeholder="Height (m)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button className="btn" onClick={calculate} disabled={loading}>
        {loading ? 'Calculating...' : 'Calculate BMI'}
      </button>
      {result && (
        <div className="result">
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default FunnyBmiCalculator;