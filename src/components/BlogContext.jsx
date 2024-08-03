import React, { createContext, useState, useContext } from 'react';
import Image from '../assets/Image.jpg'
import Image2 from '../assets/Image2.jpg'
import Image3 from '../assets/Image3.jpg'
import Image4 from '../assets/Image4.jpg'

const BlogContext = createContext();

export const useBlogs = () => {
  return useContext(BlogContext);
};

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    {
      img: Image,
      title: 'Blog Post 1',
      description: 'This is a short description of blog post 1.'
    },
    {
      img: Image2,
      title: 'Blog Post 2',
      description: 'This is a short description of blog post 2.'
    },
    {
      img: Image3,
      title: 'Blog Post 3',
      description: 'This is a short description of blog post 3.'
    },
    {
      img: Image4,
      title: 'Blog Post 4',
      description: 'This is a short description of blog post 4.'
    },
  ]);

  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
  };

  const deleteBlog = (index) => {
    setBlogs(blogs.filter((_, i) => i !== index));
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
