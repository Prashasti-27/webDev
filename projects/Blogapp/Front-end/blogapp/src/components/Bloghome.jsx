import React from "react";
// import { Link } from "react-router-dom";

const Home = () => {
  // Mock data (replace with real API later)
  const mockPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      content: "Learn how to build modern web applications with React...",
      author: "Jane Doe",
      date: "2023-10-15",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      content: "A complete guide to styling your apps with Tailwind...",
      author: "John Smith",
      date: "2023-10-10",
    },
    {
      id: 3,
      title: "MERN Stack Fundamentals",
      content: "Build full-stack apps with MongoDB, Express, React, and Node...",
      author: "Alex Johnson",
      date: "2023-10-05",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            MyBlog
        
          <div className="space-x-4">
            Home
           New POST
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-indigo-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to MyBlog</h1>
          <p className="text-xl mb-8">A place to share your thoughts and ideas</p>
         cREATE
        </div>
      </header>

      {/* Blog Posts Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.content}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} MyBlog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;