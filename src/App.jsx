import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import MyPosts from './components/MyPosts';
import SignUp from './components/SignUp';
import Login from './components/Login';
import UserPage from './components/UserPage';
import Home1 from './components/Home1';
import AddPost from './components/AddPost';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './ThemeContext';
import './index.css';
import { BlogProvider } from './components/BlogContext';

const App = () => {
  return (
    <BlogProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Header />
            <main className="p-4 container mx-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home1" element={<Home1 />} />
                <Route path="/my-posts" element={<MyPosts />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user/:username" element={<UserPage />} />
                <Route path="/add-post" element={<AddPost />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </BlogProvider>
  );
};

export default App;
