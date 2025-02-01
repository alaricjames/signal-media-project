import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import WebDesignFeatures from './components/WebDesignFeatures';
import Blog from './components/Blog';
import Contact from './components/Contact';
import BlogPost from './pages/BlogPost';
import AboutPage from './pages/AboutPage';
import BlogListPage from './pages/BlogListPage';
import CustomCursor from './components/CustomCursor';
import './App.css';

// Layout component that wraps all pages with consistent Navbar and Footer
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Outlet allows child routes to render in this space */}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

// HomePage component with all main page components
const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <WebDesignFeatures />
      <Blog />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Index route for home page */}
          <Route index element={<HomePage />} />
          
          {/* About page route */}
          <Route path="/about" element={<AboutPage />} />
          
          {/* Blog routes */}
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="blog/:slug" element={<BlogPost />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;