import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white h-screen shadow-lg p-6">
      <h2 className="text-xl font-bold mb-6 text-blue-600">Dashboard</h2>
      <ul className="space-y-4 text-gray-600">
        <li><Link to="/dashboard">Overview</Link></li>
        <li><Link to="/dashboard/reviews">Reviews</Link></li>
        <li><Link to="/dashboard/posts">Posts</Link></li>
        <li><Link to="/dashboard/analytics">Analytics</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;