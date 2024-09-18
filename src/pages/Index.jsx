import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Droplet, Leaf, Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="hero-section text-white py-24">
          <div className="container mx-auto px-4 hero-content">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Discover Your Signature Scent</h1>
            <p className="text-xl md:text-2xl text-center mb-12">Indulge in the art of luxury fragrances with FAJDI Perfumes</p>
            <div className="flex justify-center">
              <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-6 py-3 md:px-8 md:py-4">
                <Link to="/about">Explore Our Collections <ArrowRight className="ml-2" /></Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-secondary">Our Exquisite Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <Card className="collection-card bg-card overflow-hidden">
                <img src="https://images.unsplash.com/photo-1615526675159-e248c3021d3f" alt="Midnight Allure Perfume" className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-secondary">Midnight Allure</h3>
                  <p className="text-muted-foreground mb-4">A captivating blend for enchanting evenings, featuring notes of dark chocolate, vanilla, and exotic woods. Perfect for those mysterious nights out.</p>
                  <Button variant="outline" className="text-secondary hover:text-secondary-foreground">Learn More</Button>
                </CardContent>
              </Card>
              <Card className="collection-card bg-card overflow-hidden">
                <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f" alt="Daybreak Essence Perfume" className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-secondary">Daybreak Essence</h3>
                  <p className="text-muted-foreground mb-4">Fresh and invigorating scents for a new day, blending citrus, jasmine, and light musk. Start your mornings with a burst of energy and positivity.</p>
                  <Button variant="outline" className="text-secondary hover:text-secondary-foreground">Learn More</Button>
                </CardContent>
              </Card>
              <Card className="collection-card bg-card overflow-hidden">
                <img src="https://images.unsplash.com/photo-1541643600914-78b084683601" alt="Floral Symphony Perfume" className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-secondary">Floral Symphony</h3>
                  <p className="text-muted-foreground mb-4">A harmonious blend of rose, peony, and lily of the valley. This elegant fragrance evokes the beauty of a blooming garden in spring.</p>
                  <Button variant="outline" className="text-secondary hover:text-secondary-foreground">Learn More</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-b from-primary to-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-secondary">Why Choose FAJDI Perfumes?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="feature-card">
                <Star className="feature-icon text-accent mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-accent">Premium Quality</h3>
                <p className="text-muted-foreground">We use only the finest ingredients sourced from around the world, ensuring a long-lasting and luxurious experience.</p>
              </div>
              <div className="feature-card">
                <Droplet className="feature-icon text-accent mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-accent">Expert Craftsmanship</h3>
                <p className="text-muted-foreground">Our master perfumers blend art and science to create unforgettable scents that tell a unique story.</p>
              </div>
              <div className="feature-card">
                <Leaf className="feature-icon text-accent mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-accent">Sustainable Practices</h3>
                <p className="text-muted-foreground">We're committed to eco-friendly production and packaging, ensuring guilt-free indulgence in luxury.</p>
              </div>
              <div className="feature-card">
                <Heart className="feature-icon text-accent mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-accent">Customer Satisfaction</h3>
                <p className="text-muted-foreground">Our dedication to excellence extends to our customer service, ensuring a delightful experience from purchase to wear.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Luxury</h2>
            <p className="text-lg md:text-xl mb-8 md:mb-12">Indulge in the world of FAJDI Perfumes and discover your signature scent. Our fragrances are more than just scents; they're an expression of your unique personality and style.</p>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-6 py-3 md:px-8 md:py-4">
              <Link to="/blog">Explore Our Blog <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="footer text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; 2024 FAJDI Perfumes. All rights reserved.</p>
          <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
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
