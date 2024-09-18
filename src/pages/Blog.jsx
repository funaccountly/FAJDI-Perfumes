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
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">FAJDI Perfumes Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-card">
              <CardHeader>
                <CardTitle className="text-primary">{post.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
