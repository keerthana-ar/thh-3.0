import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/HomePage';
import DailyTips from './components/DailyTips';
import Resources from './components/Resources';
import JournalEntry from './components/JournalEntry';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/daily-tips" element={<DailyTips />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/journal" element={<JournalEntry />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;