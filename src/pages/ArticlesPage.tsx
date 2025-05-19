
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { sampleArticles } from "@/data/articles";

const ArticlesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter articles based on search term
  const filteredArticles = sampleArticles.filter(article => 
    article.status === "published" && (
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.keywords.some(keyword => 
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-center">Artikel</h1>
      <p className="text-gray-600 mb-8 text-center">
        Temukan artikel terbaru dan wawasan dari tim ANTLIA
      </p>
      
      <div className="mb-8">
        <input
          type="text"
          placeholder="Cari artikel..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-antlia-blue"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {filteredArticles.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-xl text-gray-600">Tidak ada artikel yang ditemukan</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="h-48 bg-antlia-light flex items-center justify-center">
                  {article.coverImage ? (
                    <img 
                      src={article.coverImage} 
                      alt={article.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 text-antlia-blue">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" 
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">{new Date(article.publishedAt).toLocaleDateString('id-ID')}</span>
                  {article.category && (
                    <span className="inline-block bg-antlia-blue/10 text-antlia-blue px-2 py-1 text-xs rounded-full">
                      {article.category}
                    </span>
                  )}
                </div>
                <Link to={`/artikel/${article.slug}`}>
                  <h3 className="text-xl font-bold mb-2 hover:text-antlia-blue transition-colors">
                    {article.title}
                  </h3>
                </Link>
                <p className="text-gray-600 line-clamp-3">{article.excerpt}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between pt-0">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-antlia-purple rounded-full flex items-center justify-center text-white">
                    {article.author.charAt(0)}
                  </div>
                  <span className="text-sm ml-2 text-gray-700">{article.author}</span>
                </div>
                {article.readingTime && (
                  <span className="text-sm text-gray-500">{article.readingTime} min read</span>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticlesPage;
