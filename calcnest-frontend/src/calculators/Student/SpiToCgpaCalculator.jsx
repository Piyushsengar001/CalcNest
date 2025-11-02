import { useState } from 'react';

function SpiToCgpaCalculator() {
  const [spi1, setSpi1] = useState('');
  const [cpi2, setCpi2] = useState('');
  const [totalCgpa, setTotalCgpa] = useState(null);

  const calculate = () => {
    if (
      !spi1 || spi1 < 0 || spi1 > 10 ||
      !cpi2 || cpi2 < 0 || cpi2 > 10
    ) {
      alert('Please enter valid SPI and CPI values between 0 and 10.');
      return;
    }

    // Example simple total CGPA calculation as average of SPI1 and CPI2
    const total = ((parseFloat(spi1) + parseFloat(cpi2)) / 2).toFixed(2);
    setTotalCgpa(total);
  };

  return (
    <div className="calculator">
      <h2>SPI to CGPA Calculator</h2>
      <div>
        <input
          type="number"
          className="input"
          placeholder="Enter SPI for 1st Sem (0-10)"
          value={spi1}
          onChange={(e) => setSpi1(e.target.value)}
          min="0"
          max="10"
          step="0.01"
        />
        <input
          type="number"
          className="input"
          placeholder="Enter CPI for 2nd Sem (0-10)"
          value={cpi2}
          onChange={(e) => setCpi2(e.target.value)}
          min="0"
          max="10"
          step="0.01"
        />
      </div>
      <button className="btn" onClick={calculate}>Calculate Total CGPA</button>
      {totalCgpa && (
        <div className="result">
          <p>Your Total CGPA is: {totalCgpa} — Keep shining academically! 🌟</p>
        </div>
      )}
    </div>
  );
}

export default SpiToCgpaCalculator;
