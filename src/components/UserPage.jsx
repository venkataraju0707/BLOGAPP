import React from 'react';
import { useParams } from 'react-router-dom';

function UserPage() {
  const { username } = useParams();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">Welcome, {username}</h2>
        {/* You can add more user-specific content here */}
      </div>
    </div>
  );
}

export default UserPage;
