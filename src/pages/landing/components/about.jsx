import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../../../assets/aboutimg.png';

const AboutSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="bg-softNeutral py-20">
      <div className="container mx-auto px-2">

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* About Section */}
            {/* <div className=" pl-4">
              <h3 className="text-2xl font-serif font-bold text-secondary">
                About US
              </h3> */}
              {/* <p className="text-secondary/80 mt-2">
                We source only the finest natural ingredients to create our products, ensuring purity and quality.
              </p> */}
            {/* </div> */}
            {/* Pure Ingredients Section */}
            <div className="border-l-4 border-secondary pl-4">
              <h3 className="text-2xl font-serif font-bold text-secondary">
                Pure Ingredients
              </h3>
              <p className="text-secondary/80 mt-2">
                We source only the finest natural ingredients to create our products, ensuring purity and quality.
              </p>
            </div>

            {/* Sustainable Practices Section */}
            <div className="border-l-4 border-secondary pl-4">
              <h3 className="text-2xl font-serif font-bold text-secondary">
                Sustainable Practices
              </h3>
              <p className="text-secondary/80 mt-2">
                Our commitment to sustainability drives our practices, from sourcing to packaging, to minimize environmental impact.
              </p>
            </div>

            {/* Effective Formulas Section */}
            <div className="border-l-4 border-secondary pl-4">
              <h3 className="text-2xl font-serif font-bold text-secondary">
                Effective Formulas
              </h3>
              <p className="text-secondary/80 mt-2">
                Our products are carefully crafted to deliver effective results, promoting well-being and beauty.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <img
              src={aboutImg}
              alt="Natural Ingredients"
              className="w-full max-w-lg rounded-lg shadow-lg h-96"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
