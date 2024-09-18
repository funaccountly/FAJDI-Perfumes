import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const featuredProducts = [
    { id: 1, name: "Midnight Rose", category: "Women's Fragrances", price: "$120", image: "/placeholder.svg" },
    { id: 2, name: "Ocean Breeze", category: "Men's Fragrances", price: "$100", image: "/placeholder.svg" },
    { id: 3, name: "Floral Dreams Set", category: "Gift Sets", price: "$150", image: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-pink-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center text-purple-800">EBA Perfumes</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Latest Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <CardHeader>
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.category}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <span className="font-bold">{product.price}</span>
                  <Button>Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Explore Our Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/mens" className="bg-blue-100 p-6 rounded-lg text-center hover:bg-blue-200 transition">
              <h3 className="text-xl font-semibold">Men's Fragrances</h3>
            </Link>
            <Link to="/womens" className="bg-pink-100 p-6 rounded-lg text-center hover:bg-pink-200 transition">
              <h3 className="text-xl font-semibold">Women's Fragrances</h3>
            </Link>
            <Link to="/giftsets" className="bg-purple-100 p-6 rounded-lg text-center hover:bg-purple-200 transition">
              <h3 className="text-xl font-semibold">Gift Sets</h3>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Why Choose EBA Perfumes?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Quality Ingredients</h3>
              <p>We use only the finest ingredients in our fragrances.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Expert Craftsmanship</h3>
              <p>Our perfumers are masters of their craft.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
              <p>We're committed to environmentally friendly production.</p>
            </div>
          </div>
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
