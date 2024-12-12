import React from 'react';
import { motion } from 'framer-motion';
import K from '../../../constants';

const Products = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="products" className="bg-accent py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif font-bold text-secondary">
            Products and Services
          </h2>
          <p className="textPrimary/80 mt-4">
            Discover our innovative range of eco-friendly personal care products, crafted from upcycled eggshells to promote sustainability and well-being.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {K.PRODUCTS_CARDS.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-lg group"
            >
              {/* Background Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300"></div>

              {/* Card Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-serif font-bold">{card.title}</h3>
                <p className="mt-4 text-sm">{card.description}</p>
                <a href="#contact" className="mt-6 self-start text-sm font-medium underline group-hover:text-primary transition-colors">
                  Contact &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
