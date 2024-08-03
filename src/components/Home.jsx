import React from 'react';
import { useBlogs } from './BlogContext';

function Home() {
  const { blogs, deleteBlog } = useBlogs();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogs.map((blog, index) => (
        <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
          <img src={blog.img} alt={blog.title} className="w-full lg:h-72 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            <p>{blog.description}</p>
            <button
              onClick={() => deleteBlog(index)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
