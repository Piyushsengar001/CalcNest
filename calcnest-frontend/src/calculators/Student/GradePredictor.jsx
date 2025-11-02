import { useState } from 'react';

function GradePredictor() {
  const [currentGrade, setCurrentGrade] = useState('');
  const [finalWeight, setFinalWeight] = useState('');
  const [predictedGrade, setPredictedGrade] = useState(null);

  const calculate = () => {
    if (!currentGrade || !finalWeight || currentGrade < 0 || finalWeight < 0 || finalWeight > 100) {
      alert('Please enter valid grades and weights.');
      return;
    }
    // Simple prediction (example: assume 70% needed for A)
    const needed = 70 - (currentGrade * (1 - finalWeight / 100));
    setPredictedGrade(needed > 0 ? `Need ${needed.toFixed(2)}% in final to get A!` : 'You\'re on track for an A!');
  };

  return (
    <div className="calculator">
      <h2>Grade Predictor</h2>
      <input
        type="number"
        className="input"
        placeholder="Current Grade (%)"
        value={currentGrade}
        onChange={(e) => setCurrentGrade(e.target.value)}
      />
      <input
        type="number"
        className="input"
        placeholder="Final Exam Weight (%)"
        value={finalWeight}
        onChange={(e) => setFinalWeight(e.target.value)}
      />
      <button className="btn" onClick={calculate}>Predict</button>
      {predictedGrade && (
        <div className="result">
          <p>{predictedGrade} — Grades are just numbers, effort is key! 💪</p>
        </div>
      )}
    </div>
  );
}

export default GradePredictor;