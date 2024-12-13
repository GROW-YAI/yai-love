import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../../../assets/combo-all.jpeg';

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
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif font-bold text-secondary">
            About Us
          </h2>
          <p className="textPrimary/80 mt-4 max-w-3xl mx-auto">
            At Ewura Skin Care and More, we are dedicated to transforming natural resources into premium personal care products while championing sustainability and innovation.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center"
          >
            <img
              src={aboutImg}
              alt="Natural Ingredients"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Right Column: Text */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-16"
          >
            {/* Mission Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-secondary">
                Our Mission
              </h3>
              <p className="textPrimary/80">
              To produce well formulated eggshell soap at a comparatively low price in order to meet demand of customers and to build a very strong customer relationship with them.
              </p>
            </div>

            {/* Vision Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-secondary">
                Our Vision
              </h3>
              <p className="textPrimary/80">
                To become the preferred choice of excellence in producing high quality natural skincare soap and product.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-secondary pl-4">
                <h4 className="text-xl font-serif font-bold text-secondary">
                  Pure Ingredients
                </h4>
                <p className="text-primary/80 mt-2">
                  We source only the finest natural ingredients to create our products, ensuring purity and quality.
                </p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h4 className="text-xl font-serif font-bold text-secondary">
                  Sustainable Practices
                </h4>
                <p className="text-primary/80 mt-2">
                  Our commitment to sustainability drives our practices, from sourcing to packaging, to minimize environmental impact.
                </p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h4 className="text-xl font-serif font-bold text-secondary">
                  Effective Formulas
                </h4>
                <p className="text-primary/80 mt-2">
                  Our products are carefully crafted to deliver effective results, promoting well-being and beauty.
                </p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h4 className="text-xl font-serif font-bold text-secondary">
                  Innovation
                </h4>
                <p className="text-primary/80 mt-2">
                  Through creativity and advanced technology, we continuously improve our products and processes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;