import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider'; // Import the Slider component
import axios from 'axios'; // To make HTTP requests

const LandingPage = () => {
  // State to store the fetched products
  const [products, setProducts] = useState([]);

  // Fetch products from the backend when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch the products from the backend API
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data); // Store the fetched products in state
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    
    fetchProducts();
  }, []); // Empty dependency array to fetch products only once when the component mounts

  return (
    <div className="bg-[#F1F1F2]"> {/* Updated background to light gray */}
      <Navbar /> {/* Navigation Bar */}

      {/* Tagline Section */}
      <div className="text-center py-12">
        <img 
          src="logo2.png" 
          alt="VoltEdge Logo" 
          className="mx-auto h-24 w-auto mb-4" // Adjust the height and add bottom margin for spacing
        />
        <h1 className="text-4xl font-bold text-[#1995AD]">Welcome to Voltify</h1>
        <p className="text-lg text-[#A1D6E2] mt-4">Power Your Potential with Cutting-Edge Electronics</p>
      </div>

      {/* Slider Section */}
      <Slider /> {/* Add the updated Slider */}

      {/* Featured Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1995AD] mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dynamically render the fetched products */}
            {products.length > 0 ? (
              products.map(product => (
                <div key={product._id} className="bg-white shadow-md rounded-md p-4 hover:bg-[#F1F1F2] transition">
                  <img
                    src={
                      // If product has images and the first image exists, use it, otherwise use a placeholder
                      product.image && product.image.length > 0
                        ? product.image[0]
                        : 'https://via.placeholder.com/400x400'
                    }
                    alt={product.name || "Product Image"} // Default alt text if product name is missing
                    className="w-full h-48 object-contain mb-4 rounded-md"
                  />
                  <h3 className="text-lg font-semibold text-[#1995AD]">{product.name}</h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  <a href={`/product/${product._id}`} className="text-[#1995AD] hover:text-[#A1D6E2]">View Details</a>
                </div>
              ))
            ) : (
              <p className="text-center col-span-4 text-gray-600">No products available</p>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1995AD] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 VoltEdge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
