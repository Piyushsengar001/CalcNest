import { useState } from 'react';

function EmiCalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [emi, setEmi] = useState(null);

  const calculate = () => {
    if (!principal || !rate || !time || principal <= 0 || rate <= 0 || time <= 0) {
      alert('Please enter valid values.');
      return;
    }
    const r = rate / 12 / 100; // Monthly interest rate
    const n = time * 12; // Number of months
    const emiValue = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiValue.toFixed(2));
  };

  return (
    <div className="calculator">
      <h2>EMI Calculator</h2>
      <input
        type="number"
        className="input"
        placeholder="Principal Amount"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
      />
      <input
        type="number"
        className="input"
        placeholder="Annual Interest Rate (%)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <input
        type="number"
        className="input"
        placeholder="Loan Tenure (Years)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button className="btn" onClick={calculate}>Calculate EMI</button>
      {emi && (
        <div className="result">
          <p>Your EMI is: ${emi} — Plan your finances wisely! 💰</p>
        </div>
      )}
    </div>
  );
}

export default EmiCalculator;