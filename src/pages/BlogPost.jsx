import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  console.log('Raw blogPosts:', blogPosts);
  console.log('Type of blogPosts:', typeof blogPosts);
  console.log('Is Array:', Array.isArray(blogPosts));
  console.log('Length:', blogPosts.length);

  const { slug } = useParams();
  
  console.log('Current slug:', slug);
  console.log('Available posts:', blogPosts);

  const post = blogPosts.find(p => {
    console.log('Checking post:', p);
    console.log('Slug match:', p.slug === slug);
    return p.slug === slug;
  });

  console.log('Found post:', post);

  // Scroll to top when component mounts
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

  const safeContent = post.content || {};
  const benefits = safeContent.benefits || [];
  const howTo = safeContent.howTo || [];

  // Custom function to handle text with bold parts
  const renderTextWithBold = (text, boldText) => {
    const parts = text.split(boldText);
    return parts.reduce((acc, part, index) => {
      acc.push(part);
      if (index < parts.length - 1) {
        acc.push(<strong key={`bold-${index}`}>{boldText}</strong>);
      }
      return acc;
    }, []);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <span className="text-purple-600">{post.date}</span>
        <h1 className="text-4xl font-bold mt-2 mb-6">{post.title}</h1>
        
        <div className="max-w-none text-gray-600">
          <p className="text-xl text-gray-600 mb-8">
            {safeContent.intro ? (
              renderTextWithBold(
                safeContent.intro, 
                "Search Engine Optimization (SEO)"
              )
            ) : (
              'No introduction available'
            )}
          </p>

          
          {benefits.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center">
                <svg className="h-8 w-8 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                Why Is SEO Important?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className={`p-6 bg-white rounded-lg shadow-md border-l-4 border-${benefit.icon.color}-600`}
                  >
                    <div className="flex items-center mb-3">
                      <svg 
                        className={`h-6 w-6 text-${benefit.icon.color}-600 mr-2`} 
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
                      <strong className="text-gray-800">{benefit.title}</strong>
                    </div>
                    <p>{benefit.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}

{howTo.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center">
                <svg className="h-8 w-8 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
                How to Use SEO for Your Business
              </h2>
              
              <div className="space-y-4 mb-8 bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <ul className="space-y-4">
                  {howTo.map((step, index) => (
                    <li key={index}>
                      <div className="flex items-center mb-2">
                        <svg 
                          className={`h-5 w-5 text-${step.icon.color}-600 mr-2`} 
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
                        <strong>{step.title}</strong>
                      </div>
                      <p>{step.description}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center">
                <svg className="h-8 w-8 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Conclusion
              </h2>
              <p className="mb-8">SEO is a powerful tool that helps businesses in Harare grow. It boosts your visibility, brings in more customers, and builds trust. In a busy market, using smart SEO strategies can make the difference between being found or forgotten. By focusing on SEO, businesses in Harare can improve their online presence and succeed in today's digital world.</p>
            </>
          )}

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold mb-4">Need Help with Your SEO?</h3>
            <p className="mb-6">Contact Signal Media for professional SEO services tailored for the Zimbabwean market.</p>
            <Link to="/#contact" className="gradient-bg text-white px-6 py-3 rounded hover:opacity-90 inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;