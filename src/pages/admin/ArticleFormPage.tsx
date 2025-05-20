
import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/ui/button';

const ArticleFormPage = () => {
  const { id } = useParams();
  const isEditMode = !!id;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        {isEditMode ? 'Edit Article' : 'Create New Article'}
      </h1>
      
      <div className="bg-white shadow rounded-lg p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Article title"
              defaultValue={isEditMode ? "Example Article Title" : ""}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="article-slug"
              defaultValue={isEditMode ? "example-article-title" : ""}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
            <textarea 
              rows={10}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Article content..."
              defaultValue={isEditMode ? "Example article content..." : ""}
            />
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button variant="outline">Cancel</Button>
            <Button>{isEditMode ? 'Update' : 'Create'}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleFormPage;
