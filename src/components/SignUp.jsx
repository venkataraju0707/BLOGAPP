import React, { useState } from 'react';

function SignUp() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1" htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
