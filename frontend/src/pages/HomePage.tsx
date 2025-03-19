// src/pages/HomePage.tsx
import React from 'react';
import UserArea from '../components/UserArea';
import SubscriptionArea from '../components/SubscriptionArea';
import QueryArea from '../components/QueryArea';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-10">
        <UserArea userName="John Doe" />
        <SubscriptionArea />
        <QueryArea />
    </div>
  );
};

export default HomePage;
