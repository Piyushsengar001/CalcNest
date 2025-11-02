import { useState } from 'react';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculate = () => {
    if (!birthDate) {
      alert('Please select a birth date.');
      return;
    }
    const today = new Date();
    const birth = new Date(birthDate);
    let ageYears = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      ageYears--;
    }
    setAge(ageYears);
  };

  return (
    <div className="calculator">
      <h2>Age Calculator</h2>
      <input
        type="date"
        className="input"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button className="btn" onClick={calculate}>Calculate Age</button>
      {age !== null && (
        <div className="result">
          <p>You are {age} years old — Age is just a number! 🎂</p>
        </div>
      )}
    </div>
  );
}

export default AgeCalculator;