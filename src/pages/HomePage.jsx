import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPost from './pages/BlogPost';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;