import React from 'react';

const Process = () => {
  return (
    <section id="process" className="bg-softNeutral py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Heading, Text, and Button */}
        <div className="space-y-6">
          <h2 className="text-4xl font-serif font-bold text-secondary">
            Discover the Power of Our Products
          </h2>
          <p className="text-secondary/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>

        {/* Right Column: Steps */}
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md relative">
            <h3 className="text-xl font-serif font-bold text-secondary">
              Discover the Power of Natural Ingredients
            </h3>
            <p className="text-secondary/80 mt-2">
              Learn about the carefully selected natural ingredients that form
              the foundation of Eggshell Elixir's products.
            </p>
            <div className="absolute top-3 right-3 text-5xl font-bold text-gray-200">
              01
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-primary-light rounded-lg shadow-md relative">
            <h3 className="text-xl font-serif font-bold text-secondary">
              Step 2
            </h3>
            <p className="text-secondary/80 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
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
