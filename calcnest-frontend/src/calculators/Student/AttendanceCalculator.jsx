import { useState } from 'react';

function AttendanceCalculator() {
  const [totalClasses, setTotalClasses] = useState('');
  const [attendedClasses, setAttendedClasses] = useState('');
  const [percentage, setPercentage] = useState(null);

  const calculate = () => {
    if (!totalClasses || !attendedClasses || totalClasses <= 0 || attendedClasses < 0 || attendedClasses > totalClasses) {
      alert('Please enter valid numbers.');
      return;
    }
    setPercentage(((attendedClasses / totalClasses) * 100).toFixed(2));
  };

  return (
    <div className="calculator">
      <h2>Attendance Calculator</h2>
      <input
        type="number"
        className="input"
        placeholder="Total Classes"
        value={totalClasses}
        onChange={(e) => setTotalClasses(e.target.value)}
      />
      <input
        type="number"
        className="input"
        placeholder="Attended Classes"
        value={attendedClasses}
        onChange={(e) => setAttendedClasses(e.target.value)}
      />
      <button className="btn" onClick={calculate}>Calculate</button>
      {percentage && (
        <div className="result">
          <p>Your attendance is: {percentage}% — Study hard, attend more! 📚</p>
        </div>
      )}
    </div>
  );
}

export default AttendanceCalculator;