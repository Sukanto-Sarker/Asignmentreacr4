import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md relative z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center gap-6">
          <Link to="/" className="text-xl font-bold text-blue-600">
            Contact App
          </Link>

          <Link
            to="/add"
            className="text-sm text-gray-600 hover:text-blue-600"
          >
            Add Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
