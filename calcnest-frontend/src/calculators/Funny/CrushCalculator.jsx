import { useState } from 'react';
import { mockApi } from '../../api/mockApi.js';

function CrushCalculator() {
  const [name, setName] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const calculate = async () => {
    if (!name.trim()) {
      alert('Please enter a name.');
      return;
    }
    setLoading(true);
    const response = await mockApi.generateCrushMessage(name);
    setResult(response);
    setLoading(false);
  };

  return (
    <div className="calculator">
      <h2>Crush Calculator</h2>
      <input
        type="text"
        className="input"
        placeholder="Enter your crush's name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn" onClick={calculate} disabled={loading}>
        {loading ? 'Calculating...' : 'Calculate Crush Chance'}
      </button>
      {result && (
        <div className="result">
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default CrushCalculator;