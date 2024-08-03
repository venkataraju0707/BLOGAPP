import React, { useState, useContext } from 'react';
import { BlogContext } from './BlogContext';

function AddPostForm() {
  const { addBlog } = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [img, setImg] = useState(null);

  const handleImageChange = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
  };

  const handleAddPost = (e) => {
    e.preventDefault();

    const newBlog = {
      img: img || 'https://via.placeholder.com/150', // Placeholder image if none is uploaded
      title,
      description,
      author
    };

    addBlog(newBlog);
    setTitle('');
    setDescription('');
    setAuthor('');
    setImg(null);
  };

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-white mb-4">Add a New Blog Post</h1>
      <form onSubmit={handleAddPost} className="bg-white p-4 rounded-md shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Add Post
        </button>
      </form>
    </div>
  );
}

export default AddPostForm;
