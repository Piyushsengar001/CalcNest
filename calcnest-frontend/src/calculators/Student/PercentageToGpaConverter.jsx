import { useState } from 'react';

function PercentageToGpaConverter() {
  const [percentage, setPercentage] = useState('');
  const [gpa, setGpa] = useState(null);

  const calculate = () => {
    if (!percentage || percentage < 0 || percentage > 100) {
      alert('Please enter a valid percentage (0-100).');
      return;
    }
    // Example conversion: GPA = (percentage / 20) - 1 (4.0 scale)
    setGpa(((percentage / 20) - 1).toFixed(2));
  };

  return (
    <div className="calculator">
      <h2>Percentage to GPA Converter</h2>
      <input
        type="number"
        className="input"
        placeholder="Enter Percentage (0-100)"
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
      />
      <button className="btn" onClick={calculate}>Convert</button>
      {gpa && (
        <div className="result">
          <p>Your GPA is: {gpa} — Knowledge is power! ⚡</p>
        </div>
      )}
    </div>
  );
}

export default PercentageToGpaConverter;