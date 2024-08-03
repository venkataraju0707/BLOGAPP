import React, { useState } from 'react';
import { useBlogs } from './BlogContext';

const AddPost = () => {
  const { addBlog } = useBlogs();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog({ title, description, img });
    setTitle('');
    setDescription('');
    setImg('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-8 p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Image URL</label>
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Add Post
      </button>
    </form>
  );
};

export default AddPost;
