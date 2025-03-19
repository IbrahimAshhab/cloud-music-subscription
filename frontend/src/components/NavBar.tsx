// navbar.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface NavbarProps {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
  
  const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, setIsLoggedIn }) => {
    
  const navigate = useNavigate();
  const handleAuthButtonClick = () => {
    if (isLoggedIn) {
      // Perform log out (could be clearing tokens, etc.)
      setIsLoggedIn(false);
      navigate('/');
    } else {
      // Navigate to login page
      navigate('/register');
    }
  };

  return (
    <nav className="flex justify-between items-center py-4 px-10 bg-blue-500 text-white">
      {/* Cloud Music button */}
      <Link to="/" className="text-2xl font-bold hover:text-blue-200">
        Cloud Music
      </Link>

      {/* Sign in / Sign up or Log out button */}
      <button
        onClick={handleAuthButtonClick}
        className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition"
      >
        {isLoggedIn ? 'Log Out' : 'Sign In / Sign Up'}
      </button>
    </nav>
  );
};

export default Navbar;
