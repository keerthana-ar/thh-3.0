import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Mindful Moments</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/daily-tips" className="hover:text-blue-200">Daily Tips</Link>
          <Link to="/resources" className="hover:text-blue-200">Resources</Link>
          <Link to="/journal" className="hover:text-blue-200">Journal</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;