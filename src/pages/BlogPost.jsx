import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-red-500">Blog Post Not Found</h1>
        <p>The blog post you are looking for does not exist.</p>
        <Link to="/" className="text-blue-500 hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
      <p className="text-gray-600 mb-8">{post.date}</p>
      
      <div className="prose lg:prose-xl max-w-none">
        <p className="text-lg text-gray-700 mb-12">{post.content.intro}</p>
        
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Key Benefits</h2>
        <div className="grid gap-8 mb-12">
          {post.content.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg 
                  className={`h-6 w-6 text-${benefit.icon.color}-600`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {benefit.icon.paths.map((path, pathIndex) => (
                    <path 
                      key={pathIndex}
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d={path}
                    />
                  ))}
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-8 text-gray-900">How to Implement</h2>
        <div className="grid gap-8">
          {post.content.howTo.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg 
                  className={`h-6 w-6 text-${step.icon.color}-600`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {step.icon.paths.map((path, pathIndex) => (
                    <path 
                      key={pathIndex}
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d={path}
                    />
                  ))}
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Need Help with Your Digital Marketing?</h3>
        <p className="text-gray-700 mb-6">Contact Signal Media for professional digital marketing services tailored for your business.</p>
        <Link to="/#contact" className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors inline-block">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;