import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="p-5 bg-gray-800 text-white flex justify-between">
      <Link to="/" className="text-lg font-bold">
        Home
      </Link>
      <div>
        <Link to="/cart">
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
