// src/pages/LoginPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

interface LoginPageProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPage: React.FC<LoginPageProps> = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  // Handle successful login and redirect to the main page
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);  // Update the state to reflect the user is logged in
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {/* Render LoginForm component */}
        <LoginForm onLoginSuccess={handleLoginSuccess} />

        {/* Register Link */}
        <div className="mt-4 text-center">
          <span>Don't have an account? </span>
          <a href="/register" className="text-blue-500 hover:underline">Register here</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
