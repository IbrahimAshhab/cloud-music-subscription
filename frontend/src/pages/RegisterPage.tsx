// src/pages/RegisterPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  // Handle successful registration and redirect to the login page
  const handleRegisterSuccess = () => {
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

        {/* Render RegisterForm component */}
        <RegisterForm onRegisterSuccess={handleRegisterSuccess} />

        {/* Login Link */}
        <div className="mt-4 text-center">
          <span>Already have an account? </span>
          <a href="/login" className="text-blue-500 hover:underline">Login here</a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
