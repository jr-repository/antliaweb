
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

const AdminArticlesPage = () => {
  const articles = [
    { id: 1, title: 'Article 1', status: 'Published', date: '2023-05-15' },
    { id: 2, title: 'Article 2', status: 'Draft', date: '2023-05-10' },
    { id: 3, title: 'Article 3', status: 'Published', date: '2023-05-05' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Articles</h1>
        <Button asChild>
          <Link to="/admin/articles/new">Add New Article</Link>
        </Button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id} className="border-t">
                <td className="py-3 px-4">{article.title}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    article.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {article.status}
                  </span>
                </td>
                <td className="py-3 px-4">{article.date}</td>
                <td className="py-3 px-4">
                  <Link 
                    to={`/admin/articles/${article.id}`} 
                    className="text-blue-600 hover:text-blue-800 mr-4"
                  >
                    Edit
                  </Link>
                  <button className="text-red-600 hover:text-red-800">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminArticlesPage;
