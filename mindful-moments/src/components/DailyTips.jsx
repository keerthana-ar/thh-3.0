import { useState, useEffect } from 'react';

const TIPS = [
  "Practice deep breathing for 5 minutes today.",
  "Write down three things you're grateful for.",
  "Take a short walk outdoors to boost your mood.",
  "Meditate for 10 minutes using a guided meditation.",
  "Do something creative that brings you joy.",
];

function DailyTips() {
  const [currentTip, setCurrentTip] = useState('');

  useEffect(() => {
    // Randomly select a tip when component loads
    setCurrentTip(TIPS[Math.floor(Math.random() * TIPS.length)]);
  }, []);

  const getNewTip = () => {
    setCurrentTip(TIPS[Math.floor(Math.random() * TIPS.length)]);
  };

  return (
    <div className="text-center bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Todays Mindful Moment</h2>
      <div className="text-xl text-gray-700 mb-6">{currentTip}</div>
      <button 
        onClick={getNewTip}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Get Another Tip
      </button>
    </div>
  );
}

export default DailyTips;