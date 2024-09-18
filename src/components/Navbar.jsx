import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-secondary">EBA Perfumes</Link>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-primary-foreground hover:text-secondary transition">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
