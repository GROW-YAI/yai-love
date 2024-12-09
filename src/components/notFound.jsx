import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import K from '../constants';

const NotFoundPage = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-softNeutral via-primary to-accent flex flex-col justify-center items-center text-secondary">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
        className="text-8xl font-handwritten font-bold mb-4"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
        className="text-2xl mb-8"
      >
        Oops! Page not found.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 50, delay: 0.2 }}
      >
        <Link
          to="/"
          className="bg-primary text-secondary py-3 px-8 rounded-full font-medium hover:bg-accent transition-colors"
        >
          Go to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;