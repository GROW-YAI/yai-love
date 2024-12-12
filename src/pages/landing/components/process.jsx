import React from 'react';

const Process = () => {
  return (
    <section id="process" className="bg-softNeutral py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Heading, Text, and Button */}
        <div className="space-y-6">
          <h2 className="text-4xl font-serif font-bold text-secondary">
            Our Process: From Eggshells to Elegance
          </h2>
          <p className="text-secondary/80">
            At Ewura Skin Care, we believe in transforming nature's overlooked resources into premium personal care products. Our unique process ensures sustainability, quality, and innovation at every step.
          </p>
        </div>

        {/* Right Column: Steps */}
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md relative">
            <h3 className="text-xl font-serif font-bold text-secondary">
              Step 1: Sourcing Natural Ingredients
            </h3>
            <p className="text-secondary/80 mt-2">
              We begin by sourcing high-quality, natural ingredients, including upcycled eggshells, to craft eco-friendly products that care for your skin and the planet.
            </p>
            <div className="absolute top-3 right-3 text-5xl font-bold text-gray-200">
              01
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-primary-light rounded-lg shadow-md relative">
            <h3 className="text-xl font-serif font-bold text-secondary">
              Step 2: Innovating Sustainable Solutions
            </h3>
            <p className="text-secondary/80 mt-2">
              Through advanced research and innovation, we transform these natural ingredients into effective formulas, ensuring sustainability at every stage.
            </p>
            <div className="absolute top-3 right-3 text-5xl font-bold text-gray-200">
              02
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;