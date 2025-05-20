
import React from 'react';

const AdminDashboardPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Total Articles</h2>
          <p className="text-3xl font-bold">24</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Published</h2>
          <p className="text-3xl font-bold">18</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Drafts</h2>
          <p className="text-3xl font-bold">6</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
