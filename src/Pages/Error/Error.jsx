import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl mt-4">Oops! The page you're looking for does not exist.</p>
        <Link to="/" className="mt-8 inline-block bg-emerald-700 text-white px-4 py-2 rounded-lg hover:bg-emerald-600">Go back to Home</Link>
      </div>
    </div>
  );
};

export default Error;
