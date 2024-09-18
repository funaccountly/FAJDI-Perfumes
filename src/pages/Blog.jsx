import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Layering Fragrances",
      excerpt: "Learn how to combine different scents for a unique signature fragrance.",
      date: "March 15, 2024",
    },
    {
      id: 2,
      title: "Summer Scents: Top 5 Fragrances for the Season",
      excerpt: "Discover the perfect light and refreshing fragrances for warm weather.",
      date: "March 10, 2024",
    },
    {
      id: 3,
      title: "The History of Perfume: From Ancient Egypt to Modern Day",
      excerpt: "Explore the fascinating journey of fragrance through the ages.",
      date: "March 5, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">EBA Perfumes Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;