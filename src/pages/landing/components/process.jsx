import React from 'react';

const Process = () => {
  return (
    <section id="process" className="bg-softNeutral py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Heading, Text, and Button */}
        <div className="space-y-6">
          <h2 className="text-4xl font-serif font-bold text-secondary">
            Our Process: <span className='text-primary'>From Eggshells to Elegance</span>
          </h2>
          <p className="textPrimary/80">
            At Ewura Skin Care, we believe in transforming nature's overlooked resources into premium personal care products. Our unique process ensures sustainability, quality, and innovation at every step.
          </p>
        </div>

      {/* Right Column: Steps */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Step 1 */}
  <div className="p-6 bg-white rounded-lg shadow-md relative">
    <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
    <div className="flex items-center mb-4">
      <div className="text-5xl font-bold text-gray-200 mr-4">01</div>
      <h3 className="text-xl font-serif font-bold text-secondary">
        Sourcing Natural Ingredients
      </h3>
    </div>
    <p className="text-primary/80">
      We source high-quality, natural ingredients, including upcycled eggshells, to craft eco-friendly products that care for your skin and the planet.
    </p>
    <div className="absolute bottom-0 right-0 w-12 h-12 bg-secondary rounded-tl-full flex justify-center items-center text-white">
      <span className="text-2xl font-bold">&#8594;</span>
    </div>
  </div>

  {/* Step 2 */}
  <div className="p-6 bg-primary-light rounded-lg shadow-md relative">
    <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
    <div className="flex items-center mb-4">
      <div className="text-5xl font-bold text-gray-200 mr-4">02</div>
      <h3 className="text-xl font-serif font-bold text-secondary">
        Innovating Sustainable Solutions
      </h3>
    </div>
    <p className="text-primary/80">
      Through advanced research and innovation, we transform these natural ingredients into effective formulas, ensuring sustainability at every stage.
    </p>
    <div className="absolute bottom-0 right-0 w-12 h-12 bg-secondary rounded-tl-full flex justify-center items-center text-white">
      <span className="text-2xl font-bold">&#8594;</span>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Process;