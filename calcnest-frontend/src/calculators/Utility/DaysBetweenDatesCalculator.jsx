import { useState } from 'react';

function DaysBetweenDatesCalculator() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [days, setDays] = useState(null);

  const calculate = () => {
    if (!startDate || !endDate) {
      alert('Please select both dates.');
      return;
    }
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    setDays(Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  };

  return (
    <div className="calculator">
      <h2>Days Between Dates</h2>
      <input
        type="date"
        className="input"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        className="input"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button className="btn" onClick={calculate}>Calculate Days</button>
      {days !== null && (
        <div className="result">
          <p>Days between dates: {days} — Time flies! ⏳</p>
        </div>
      )}
    </div>
  );
}

export default DaysBetweenDatesCalculator;