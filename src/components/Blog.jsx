import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  // Defensive check for blog posts
  if (!blogPosts || blogPosts.length === 0) {
    return (
      <div id="blog" className="py-20 section-alt">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Latest Insights</h2>
          <p className="text-gray-600">No blog posts available at the moment.</p>
        </div>
      </div>
    );
  }

  // Safely get the first post
  const featuredPost = blogPosts[0];

  // Defensive check for post content
  if (!featuredPost.content || !featuredPost.content.benefits) {
    return (
      <div id="blog" className="py-20 section-alt">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Latest Insights</h2>
          <p className="text-gray-600">Blog post content is incomplete.</p>
        </div>
      </div>
    );
  }

  return (
    <div id="blog" className="py-20 section-alt">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Insights</h2>
        
        {/* Featured Blog Post */}
        <div className="card-surface rounded-lg overflow-hidden mb-12">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <svg className="h-8 w-8 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <span className="text-gray-200">{featuredPost.date}</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">{featuredPost.title}</h3>
            <p className="text-gray-200 mb-6">{featuredPost.summary}</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {(featuredPost.content.benefits || []).slice(0, 3).map((benefit, index) => (
                <div key={index} className="card-surface p-6 rounded-lg text-center">
                  <svg 
                    className="h-12 w-12 text-purple-600 mx-auto mb-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    {(benefit.icon?.paths || []).map((path, pathIndex) => (
                      <path 
                        key={pathIndex}
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d={path}
                      />
                    ))}
                  </svg>
                  <h4 className="font-semibold mb-2 text-white">{benefit.title}</h4>
                  <p className="text-gray-200">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <Link 
              to={`/blog/${featuredPost.slug}`} 
              className="gradient-bg text-white px-6 py-3 rounded hover:opacity-90 inline-block"
            >
              Read Full Article
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;