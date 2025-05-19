
import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Home, Layout, LogOut, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const AdminLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const auth = localStorage.getItem("antlia_admin_auth");
      if (auth) {
        const { isAuthenticated: authStatus } = JSON.parse(auth);
        setIsAuthenticated(authStatus);
      } else {
        navigate("/admin");
      }
    };

    checkAuth();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("antlia_admin_auth");
    navigate("/admin");
  };

  if (!isAuthenticated) {
    return null;
  }

  const menuItems = [
    { label: "Dashboard", icon: <Home className="h-5 w-5" />, path: "/admin/dashboard" },
    { label: "Artikel", icon: <FileText className="h-5 w-5" />, path: "/admin/articles" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle Button */}
      {isMobile && (
        <button 
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md"
          aria-label="Toggle Sidebar"
        >
          {isSidebarOpen ? (
            <X className="h-6 w-6 text-gray-500" />
          ) : (
            <Menu className="h-6 w-6 text-gray-500" />
          )}
        </button>
      )}

      {/* Sidebar */}
      <aside 
        className={`${
          isMobile ? (isSidebarOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"
        } transition-transform duration-300 ease-in-out fixed z-40 bg-white min-h-screen w-64 border-r border-gray-200 flex flex-col`}
      >
        {/* Logo */}
        <div className="px-6 py-6 flex items-center border-b border-gray-200">
          <Link to="/admin/dashboard" className="flex items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-antlia-blue to-antlia-cyan bg-clip-text text-transparent">
              ANTLIA ADMIN
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="py-6 flex flex-col flex-1">
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link 
                  to={item.path}
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-antlia-blue transition-colors"
                  onClick={() => isMobile && setIsSidebarOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="w-full justify-start text-gray-700 hover:text-red-600 hover:bg-red-50"
          >
            <LogOut className="mr-2 h-5 w-5" />
            Keluar
          </Button>
        </div>
      </aside>

      {/* Backdrop (for mobile) */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-30"
          onClick={() => setIsSidebarOpen(false)} 
          aria-hidden="true"
        />
      )}

      {/* Main Content */}
      <div className={`flex-1 overflow-auto ${isMobile ? "ml-0" : "ml-64"}`}>
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Layout className="h-6 w-6 text-antlia-blue" />
            <h2 className="text-xl font-semibold">Panel Admin</h2>
          </div>
          <div>
            <Button 
              variant="ghost"
              size="sm"
              className="text-gray-700 hover:text-antlia-blue"
              onClick={() => navigate("/")}
            >
              Lihat Situs
            </Button>
          </div>
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
