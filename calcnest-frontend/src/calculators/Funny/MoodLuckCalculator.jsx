import { useState } from 'react';

function MoodLuckCalculator() {
  const [mood, setMood] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const calculate = async () => {
    if (!mood.trim()) {
      alert('Please enter your current mood.');
      return;
    }
    setLoading(true);
    const messages = [
      `Feeling ${mood}? Your luck today is off the charts! 🍀`,
      `${mood} mood? Luck is meh — Try again tomorrow! 😐`,
      `${mood}? Lucky you! The stars align! ✨`,
    ];
    setTimeout(() => {
      setResult(messages[Math.floor(Math.random() * messages.length)]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="calculator">
      <h2>Mood/Luck Calculator</h2>
      <input
        type="text"
        className="input"
        placeholder="Describe your mood (e.g., happy, sad)"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      />
      <button className="btn" onClick={calculate} disabled={loading}>
        {loading ? 'Calculating...' : 'Check Your Luck'}
      </button>
      {result && (
        <div className="result">
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default MoodLuckCalculator;