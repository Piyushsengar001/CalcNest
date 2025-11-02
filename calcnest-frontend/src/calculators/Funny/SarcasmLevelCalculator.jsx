import { useState } from 'react';

function SarcasmLevelCalculator() {
  const [sentence, setSentence] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const calculate = async () => {
    if (!sentence.trim()) {
      alert('Please enter a sentence.');
      return;
    }
    setLoading(true);
    const messages = [
      `"${sentence}" — Sarcasm level: Expert. You're a pro! 😏`,
      `"${sentence}" — Barely sarcastic. Work on it! 🙄`,
      `"${sentence}" — 100% sarcasm detected! Master level! 🤡`,
    ];
    setTimeout(() => {
      setResult(messages[Math.floor(Math.random() * messages.length)]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="calculator">
      <h2>Sarcasm Level Calculator</h2>
      <input
        type="text"
        className="input"
        placeholder="Enter a sentence to check sarcasm"
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
      />
      <button className="btn" onClick={calculate} disabled={loading}>
        {loading ? 'Analyzing...' : 'Check Sarcasm Level'}
      </button>
      {result && (
        <div className="result">
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default SarcasmLevelCalculator;