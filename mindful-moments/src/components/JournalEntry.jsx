import { useState } from 'react';
import { analyzeSentiment } from '../services/SentimentAnalysis';

function JournalEntry() {
  const [journalText, setJournalText] = useState('');
  const [sentiment, setSentiment] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await analyzeSentiment(journalText);
    setSentiment(result);
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Journal Your Thoughts</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <textarea
          value={journalText}
          onChange={(e) => setJournalText(e.target.value)}
          placeholder="Write your thoughts here..."
          className="w-full h-48 p-3 border rounded mb-4"
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Analyze Sentiment
        </button>
      </form>
      
      {sentiment && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="font-bold">Sentiment Analysis</h3>
          <p>
            Mood: {sentiment.label} 
            (Confidence: {(sentiment.score * 100).toFixed(2)}%)
          </p>
        </div>
      )}
    </div>
  );
}

export default JournalEntry;