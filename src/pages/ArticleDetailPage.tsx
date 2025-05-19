
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { sampleArticles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ArticleDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const article = sampleArticles.find((article) => article.slug === slug);
  
  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Artikel tidak ditemukan</h1>
        <p className="mb-8">Artikel yang Anda cari tidak tersedia atau telah dihapus.</p>
        <Button 
          onClick={() => navigate("/artikel")}
          className="bg-antlia-blue hover:bg-blue-600"
        >
          Kembali ke Daftar Artikel
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/artikel" className="inline-flex items-center text-antlia-blue mb-6 hover:underline">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Kembali ke Daftar Artikel
      </Link>
      
      <article>
        <header className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
            {article.category && (
              <>
                <span className="bg-antlia-blue/10 text-antlia-blue px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span>•</span>
              </>
            )}
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString('id-ID', { 
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </time>
            {article.readingTime && (
              <>
                <span>•</span>
                <span>{article.readingTime} min read</span>
              </>
            )}
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          
          <div className="flex items-center">
            <div className="w-10 h-10 bg-antlia-purple rounded-full flex items-center justify-center text-white">
              {article.authorPhoto ? (
                <img 
                  src={article.authorPhoto} 
                  alt={article.author} 
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                article.author.charAt(0)
              )}
            </div>
            <div className="ml-3">
              <p className="font-medium">{article.author}</p>
              {article.authorEmail && (
                <p className="text-sm text-gray-600">{article.authorEmail}</p>
              )}
            </div>
          </div>
        </header>
        
        {article.coverImage && (
          <div className="mb-8">
            <img 
              src={article.coverImage} 
              alt={article.title} 
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}
        
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        <footer className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {article.keywords.map((keyword) => (
              <span 
                key={keyword} 
                className="bg-antlia-light text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                #{keyword}
              </span>
            ))}
          </div>
        </footer>
      </article>
    </div>
  );
};

export default ArticleDetailPage;
