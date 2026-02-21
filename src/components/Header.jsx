import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      {/* Left side logo */}
      <Link to="/" className="text-xl font-bold text-blue-600">
        Hero IO
      </Link>

      {/* Right side nav */}
      <nav className="flex space-x-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/apps" className="hover:text-blue-600">Apps</Link>
        <Link to="/installation" className="hover:text-blue-600">Installation</Link>
      </nav>
    </header>
  );
}

export default Header;