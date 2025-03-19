// navbar.tsx
import React, { useState } from 'react';

interface UserAreaProps {
    userName: String;
}
  
  const UserArea: React.FC<UserAreaProps> = ({ userName }) => {

  return (
    <h6 className="text-4xl font-bold">Welcome {userName} to Cloud Music</h6>
  );
};

export default UserArea;
