import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Welcome to Mindful Moments</h1>
      <p className="text-xl mb-8 text-gray-600">
        Your personal companion for mental wellness and self-care.
      </p>
      <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto">
        <Link
          to="/daily-tips"
          className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition"
        >
          Daily Tips
        </Link>
        <Link
          to="/journal"
          className="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition"
        >
          Start Journaling
        </Link>
        <Link
          to="/resources"
          className="bg-purple-500 text-white p-4 rounded-lg hover:bg-purple-600 transition"
        >
          Mental Health Resources
        </Link>
      </div>
    </div>
  );
}

export default Homepage;