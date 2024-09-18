import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8 md:mb-12">About FAJDI Perfumes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <Card className="bg-card shadow-lg">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4 text-secondary">Our Story</h2>
              <p className="text-base md:text-lg mb-6 text-card-foreground">
                FAJDI Perfumes is a luxury fragrance brand dedicated to creating exquisite scents that capture the essence of elegance and sophistication. Founded in 2010 by renowned perfumer Francesca Jansen, our passion for perfumery has driven us to source the finest ingredients from around the world and collaborate with master perfumers to craft unique, memorable fragrances.
              </p>
              <p className="text-base md:text-lg mb-6 text-card-foreground">
                Our journey began with a simple yet powerful idea: to create perfumes that not only smell divine but also evoke emotions and memories. Each FAJDI fragrance is a carefully composed symphony of scents, designed to transport the wearer to a world of luxury and refinement.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-lg">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4 text-secondary">Our Commitment</h2>
              <p className="text-base md:text-lg mb-6 text-card-foreground">
                At FAJDI Perfumes, we believe that a fragrance is more than just a scent; it's an expression of individuality, a boost of confidence, and a form of art. That's why we pour our heart and soul into every creation, ensuring that each FAJDI Perfume tells a story and leaves a lasting impression.
              </p>
              <p className="text-base md:text-lg mb-6 text-card-foreground">
                We are committed to sustainability and ethical practices in every aspect of our business. From responsibly sourcing ingredients to implementing eco-friendly packaging solutions, we strive to minimize our environmental impact while maximizing the quality and luxury of our products.
              </p>
            </CardContent>
          </Card>
        </div>
        <Card className="bg-card shadow-lg mt-8 md:mt-12">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 text-secondary">The Art of Perfumery</h2>
            <p className="text-base md:text-lg mb-6 text-card-foreground">
              Creating a FAJDI perfume is a meticulous process that combines artistry and science. Our perfumers spend months, sometimes years, perfecting each fragrance. They carefully select and blend top notes, heart notes, and base notes to create a harmonious and long-lasting scent profile.
            </p>
            <p className="text-base md:text-lg mb-6 text-card-foreground">
              We use only the highest quality ingredients, including rare and precious essential oils, absolutes, and molecular compounds. Our commitment to quality extends to every aspect of production, from the initial concept to the final bottling.
            </p>
            <p className="text-base md:text-lg text-card-foreground">
              Whether you're looking for a signature scent or a perfect gift, FAJDI Perfumes offers a diverse range of fragrances to suit every preference and occasion. Join us on this olfactory journey and discover the power of scent with FAJDI Perfumes.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
