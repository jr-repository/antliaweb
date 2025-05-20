
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './components/ui/toaster';
import MainLayout from './components/MainLayout';
import AdminLayout from './components/admin/AdminLayout';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminArticlesPage from './pages/admin/AdminArticlesPage';
import ArticleFormPage from './pages/admin/ArticleFormPage';
import NotFound from './pages/NotFound';
import PlaceholderPage from './pages/PlaceholderPage';
import ContactPage from './pages/ContactPage';

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogin = (token: string) => {
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/artikel" element={<ArticlesPage />} />
            <Route path="/artikel/:slug" element={<ArticleDetailPage />} />
            <Route path="/tentang-kami" element={<PlaceholderPage />} />
            <Route path="/produk-layanan" element={<PlaceholderPage />} />
            <Route path="/solusi" element={<PlaceholderPage />} />
            <Route path="/klien" element={<PlaceholderPage />} />
            <Route path="/kontak" element={<ContactPage />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminLoginPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
            <Route path="/admin/articles" element={<AdminArticlesPage />} />
            <Route path="/admin/articles/new" element={<ArticleFormPage />} />
            <Route path="/admin/articles/:id" element={<ArticleFormPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
