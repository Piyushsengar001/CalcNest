// Mock API for funny calculators (local, no external calls)
export const mockApi = {
  generateFunnyBmiMessage: async (bmi) => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
    const messages = [
      `BMI ${bmi}? You're a walking meme! 😂`,
      `BMI ${bmi} — You're perfectly balanced, like a yoga master! 🧘`,
      `BMI ${bmi} — Time for a salad... or pizza? 🍕`,
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  },
  generateCrushMessage: async (name) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const messages = [
      `${name}? Your crush chance is 100% — Go for it, Romeo! 💕`,
      `${name} might be thinking of you... or not. Chance: 50% — Flip a coin! 🪙`,
      `${name} — Crush level: Infinite! You're doomed! 😍`,
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  },
  generateMoodLuckMessage: async (mood) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const messages = [
      `Feeling ${mood}? Your luck today is off the charts! 🍀`,
      `${mood} mood? Luck is meh — Try again tomorrow! 😐`,
      `${mood}? Lucky you! The stars align! ✨`,
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  },
  generateSarcasmMessage: async (sentence) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const messages = [
      `"${sentence}" — Sarcasm level: Expert. You're a pro! 😏`,
      `"${sentence}" — Barely sarcastic. Work on it! 🙄`,
      `"${sentence}" — 100% sarcasm detected! Master level! 🤡`,
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  },
};