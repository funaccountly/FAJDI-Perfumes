import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Droplet, Leaf } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="hero-section text-white py-24">
          <div className="container mx-auto px-4 hero-content">
            <h1 className="text-6xl font-bold mb-6 text-center">Discover Your Signature Scent</h1>
            <p className="text-2xl text-center mb-12">Indulge in the art of luxury fragrances with FAJDI Perfumes</p>
            <div className="flex justify-center">
              <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-4">
                <Link to="/about">Explore Our Collections <ArrowRight className="ml-2" /></Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-primary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-secondary">Our Exquisite Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="collection-card bg-card overflow-hidden">
                <div className="perfume-bottle perfume-bottle-dark"></div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-secondary">Midnight Allure</h3>
                  <p className="text-muted-foreground mb-4">A captivating blend for enchanting evenings, featuring notes of dark chocolate, vanilla, and exotic woods.</p>
                  <Button variant="outline" className="text-secondary hover:text-secondary-foreground">Learn More</Button>
                </CardContent>
              </Card>
              <Card className="collection-card bg-card overflow-hidden">
                <div className="perfume-bottle perfume-bottle-light"></div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-secondary">Daybreak Essence</h3>
                  <p className="text-muted-foreground mb-4">Fresh and invigorating scents for a new day, blending citrus, jasmine, and light musk.</p>
                  <Button variant="outline" className="text-secondary hover:text-secondary-foreground">Learn More</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-primary to-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-secondary">Why Choose FAJDI Perfumes?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="feature-card">
                <Star className="feature-icon text-accent mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-accent">Premium Quality</h3>
                <p className="text-muted-foreground">We use only the finest ingredients sourced from around the world.</p>
              </div>
              <div className="feature-card">
                <Droplet className="feature-icon text-accent mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-accent">Expert Craftsmanship</h3>
                <p className="text-muted-foreground">Our master perfumers blend art and science to create unforgettable scents.</p>
              </div>
              <div className="feature-card">
                <Leaf className="feature-icon text-accent mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-accent">Sustainable Practices</h3>
                <p className="text-muted-foreground">We're committed to eco-friendly production and packaging.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section text-white py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Experience Luxury</h2>
            <p className="text-xl mb-12">Indulge in the world of FAJDI Perfumes and discover your signature scent.</p>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4">
              <Link to="/blog">Explore Our Blog <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="footer text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; 2024 FAJDI Perfumes. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-secondary">Privacy Policy</a>
            <a href="#" className="hover:text-secondary">Terms of Service</a>
            <a href="#" className="hover:text-secondary">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
