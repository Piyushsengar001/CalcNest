import { useState } from 'react';

function TaxCalculator() {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState(null);

  const calculate = () => {
    if (!income || income < 0) {
      alert('Please enter a valid income.');
      return;
    }
    // Simple tax calculation (example: 20% tax)
    setTax((income * 0.2).toFixed(2));
  };

  return (
    <div className="calculator">
      <h2>Tax Calculator</h2>
      <input
        type="number"
        className="input"
        placeholder="Annual Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <button className="btn" onClick={calculate}>Calculate Tax</button>
      {tax && (
        <div className="result">
          <p>Estimated Tax: ${tax} — Taxes are inevitable! 💸</p>
        </div>
      )}
    </div>
  );
}

export default TaxCalculator;