import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">About EBA Perfumes</h1>
        <div className="bg-card rounded-lg shadow-md p-8">
          <p className="text-lg mb-6 text-card-foreground">
            EBA Perfumes is a luxury fragrance brand dedicated to creating exquisite scents that capture the essence of elegance and sophistication. Founded in 2010, our passion for perfumery has driven us to source the finest ingredients from around the world and collaborate with master perfumers to craft unique, memorable fragrances.
          </p>
          <p className="text-lg mb-6 text-card-foreground">
            Our commitment to quality is evident in every bottle we produce. We believe that a fragrance is more than just a scent; it's an expression of individuality, a boost of confidence, and a form of art. That's why we pour our heart and soul into every creation, ensuring that each EBA Perfume tells a story and leaves a lasting impression.
          </p>
          <p className="text-lg mb-6 text-card-foreground">
            At EBA Perfumes, we also prioritize sustainability and ethical practices. We're constantly innovating to reduce our environmental impact, from using responsibly sourced ingredients to implementing eco-friendly packaging solutions. Our goal is to not only make you smell good but also feel good about your choice.
          </p>
          <p className="text-lg text-card-foreground">
            Whether you're looking for a signature scent or a perfect gift, EBA Perfumes offers a diverse range of fragrances to suit every preference and occasion. Join us on this olfactory journey and discover the power of scent with EBA Perfumes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
