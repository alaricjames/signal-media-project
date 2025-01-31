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
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">{post.date}</p>
      
      <div className="prose lg:prose-xl">
        <p className="mb-8">{safeContent.intro}</p>
        
        <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
        <div className="grid gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
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

        <h2 className="text-2xl font-bold mb-6">How to Implement</h2>
        <div className="grid gap-6">
          {howTo.map((step, index) => (
            <div key={index} className="flex items-start">
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