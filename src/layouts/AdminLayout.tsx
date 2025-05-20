
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const AdminLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/admin';

  if (isLoginPage) {
    // Render just the login page without admin chrome
    return <Outlet />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col flex-1">
        <header className="bg-white shadow h-16 flex items-center px-6">
          <h1 className="text-xl font-semibold text-gray-800">Admin Panel</h1>
        </header>
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
