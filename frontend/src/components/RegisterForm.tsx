// src/components/RegisterForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mock database of users (you can replace this with an API call)
let mockUsers = [
  {
    email: 'user@example.com',
    username: 'user1',
    password: 'password123',
  },
];

// Function to check if an email already exists in the mock database
const isEmailTaken = (email: string) => {
  return mockUsers.some(user => user.email === email);
};

// Function to add a new user to the mock database
const addUser = (email: string, username: string, password: string) => {
  mockUsers.push({ email, username, password });
};

interface RegisterFormProps {
  onRegisterSuccess: () => void; // Callback function to handle successful registration
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegisterSuccess }) => {
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the email already exists
    if (isEmailTaken(email)) {
      setErrorMessage('The email already exists');
    } else {
      // Register the new user (mocked)
      addUser(email, username, password);

      // Redirect to login page after successful registration
      onRegisterSuccess();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Error message */}
        {errorMessage && (
          <div className="text-red-500 text-sm text-center mb-4">{errorMessage}</div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
