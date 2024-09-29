import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url('https://via.placeholder.com/1920x1080')` }}>
        <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h1 className="text-white text-5xl font-bold mb-4">Welcome to Your Store</h1>
            <p className="text-white text-xl mb-8">Explore the latest trends in electronics, fashion, and more!</p>
            <a href="#products" className="bg-indigo-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-indigo-600 transition">
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Example product card */}
            <div className="bg-white shadow-md rounded-md p-4">
              <img src="https://via.placeholder.com/400x400" alt="Product 1" className="w-full h-48 object-cover mb-4 rounded-md" />
              <h3 className="text-lg font-semibold">Product 1</h3>
              <p className="text-gray-600">$99.99</p>
              <a href="#" className="text-indigo-500 hover:text-indigo-600">View Details</a>
            </div>
            {/* Repeat similar product cards */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Your Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
