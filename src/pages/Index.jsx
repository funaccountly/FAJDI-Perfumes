import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-pink-50">
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-purple-800 mb-4">Welcome to EBA Perfumes</h1>
          <p className="text-xl text-gray-600 mb-8">Discover the art of luxury fragrances</p>
          <Button asChild>
            <Link to="/about">Learn More</Link>
          </Button>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/placeholder.svg" alt="Women's Fragrances" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Women's Fragrances</h3>
                <p className="text-gray-600">Elegant and sophisticated scents for the modern woman.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/placeholder.svg" alt="Men's Fragrances" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Men's Fragrances</h3>
                <p className="text-gray-600">Bold and refined fragrances for the contemporary man.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/placeholder.svg" alt="Unisex Fragrances" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Unisex Fragrances</h3>
                <p className="text-gray-600">Versatile scents that transcend gender boundaries.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Why Choose EBA Perfumes?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Quality Ingredients</h3>
              <p className="text-gray-600">We use only the finest ingredients in our fragrances.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Expert Craftsmanship</h3>
              <p className="text-gray-600">Our perfumers are masters of their craft.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
              <p className="text-gray-600">We're committed to environmentally friendly production.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Experience Luxury</h2>
          <p className="text-xl text-gray-600 mb-8">Indulge in the world of EBA Perfumes and discover your signature scent.</p>
          <Button asChild>
            <Link to="/blog">Explore Our Blog</Link>
          </Button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 EBA Perfumes. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
