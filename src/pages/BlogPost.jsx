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
        <p 
          style={{ backgroundColor: 'rgba(21, 10, 65, 0.3)' }}
          className="text-lg leading-relaxed text-white/90 mb-12 p-6 rounded-lg border border-white/10 !important"
        >
          {post.content.intro}
        </p>
        
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Key Benefits</h2>
        <div className="grid gap-8 mb-12 max-w-none">
          {post.content.benefits.map((benefit, index) => (
            <div 
              key={index} 
              style={{ backgroundColor: 'rgba(21, 10, 65, 0.3)' }}
              className="rounded-lg shadow-md p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow border border-white/10 !important"
            >
              <div className="flex-shrink-0">
                <div className={`p-3 bg-${benefit.icon.color}-100/10 rounded-lg`}>
                  <svg 
                    className={`h-8 w-8 text-${benefit.icon.color}-600`} 
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
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white/90">{benefit.title}</h3>
                <p className="text-white/80 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-8 text-gray-900">How to Implement</h2>
        <div className="grid gap-8">
          {post.content.howTo.map((step, index) => (
            <div 
              key={index} 
              style={{ backgroundColor: 'rgba(21, 10, 65, 0.3)' }}
              className="rounded-lg shadow-md p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow border border-white/10"
            >
              <div className="flex-shrink-0">
                <div className={`p-3 bg-${step.icon.color}-100/10 rounded-lg`}>
                  <svg 
                    className={`h-8 w-8 text-${step.icon.color}-600`} 
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
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white/90">{step.title}</h3>
                <p className="text-white/80 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-8 border-t">
        <h3 className="text-xl font-bold mb-4">
          {post.slug.includes('seo') 
            ? "Need Help with Your SEO?" 
            : post.slug.includes('social-media') 
              ? "Need Help with Your Social Media Marketing?"
              : "Need Help with Your Digital Marketing?"
          }
        </h3>
        <p className="mb-6">
          {post.slug.includes('seo')
            ? "Contact Signal Media for professional SEO services tailored for the Zimbabwean market."
            : post.slug.includes('social-media')
              ? "Contact Signal Media for professional social media marketing services to grow your brand."
              : "Contact Signal Media for professional digital marketing services tailored for your business."
          }
        </p>
        <Link to="/#contact" className="gradient-bg text-white px-6 py-3 rounded hover:opacity-90 inline-block">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;