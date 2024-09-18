import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-secondary mb-4">Welcome to EBA Perfumes</h1>
          <p className="text-xl text-muted-foreground mb-8">Discover the art of luxury fragrances</p>
          <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link to="/about">Learn More</Link>
          </Button>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-secondary">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="perfume-bottle perfume-bottle-dark"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-secondary">Midnight Allure</h3>
                <p className="text-muted-foreground">A captivating blend for enchanting evenings.</p>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="perfume-bottle perfume-bottle-light"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-secondary">Daybreak Essence</h3>
                <p className="text-muted-foreground">Fresh and invigorating scents for a new day.</p>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="perfume-bottle perfume-bottle-dark"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-secondary">Timeless Elegance</h3>
                <p className="text-muted-foreground">Classic fragrances that never go out of style.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-secondary">Why Choose EBA Perfumes?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-accent">Quality Ingredients</h3>
              <p className="text-muted-foreground">We use only the finest ingredients in our fragrances.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-accent">Expert Craftsmanship</h3>
              <p className="text-muted-foreground">Our perfumers are masters of their craft.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-accent">Sustainable Practices</h3>
              <p className="text-muted-foreground">We're committed to environmentally friendly production.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-secondary">Experience Luxury</h2>
          <p className="text-xl text-muted-foreground mb-8">Indulge in the world of EBA Perfumes and discover your signature scent.</p>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/blog">Explore Our Blog</Link>
          </Button>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 EBA Perfumes. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
