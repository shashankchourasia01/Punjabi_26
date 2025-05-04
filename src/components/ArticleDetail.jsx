// ArticleDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import tabData from './tabData'; 

const ArticleDetails = () => {
  const { id } = useParams();

  // Flatten all articles
  const allArticles = Object.values(tabData).flat();
  const article = allArticles.find((item) => item.id === parseInt(id));

  if (!article) {
    return <div className="text-center p-10 text-white bg-[#344650]">Article not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#344650] text-white p-6">
      <div className="max-w-4xl mx-auto bg-white text-black p-6 rounded-lg shadow-lg">
        <img src={article.img} alt={article.title} className="w-full h-64 object-cover rounded mb-6" />
        <p className="text-sm text-gray-500 mb-2">{article.category}</p>
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <p className="text-lg leading-relaxed">
          {article.content || "This is placeholder content for the article. Replace with real data."}
        </p>
      </div>
    </div>
  );
};

export default ArticleDetails;
