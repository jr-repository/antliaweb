
import React from 'react';
import { Button } from '../../components/ui/button';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
  const navigate = useNavigate();
  
  // This is just a placeholder login function
  const handleLogin = () => {
    localStorage.setItem('authToken', 'demo-token');
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Admin Login</h2>
          <p className="text-gray-600">Log in to access the admin panel</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="admin@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="********"
            />
          </div>
          
          <Button 
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
