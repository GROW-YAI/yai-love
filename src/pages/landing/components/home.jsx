import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import K from "../../../constants";

const Home = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex + 1) % K.HERO_IMAGES.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="bg-primary">
      <div className="w-full h-screen bg-background">
        {/* Top Half */}
        <div className="flex flex-col items-center justify-center h-1/2 text-center bg-softNeutral">
          <h1 className="text-4xl font-bold text-secondary">
            Ewura Skin Care and More
          </h1>
          <p className="textPrimary mt-4 max-w-2xl mx-auto">
            Transforming eggshells into innovative, eco-friendly personal care products that enhance well-being while protecting our planet.
          </p>
          <div className="mt-6 space-x-4">
            <button
              onClick={() =>
                document
                  .getElementById("products")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-primary text-neutral px-6 py-2 rounded shadow-lg hover:bg-secondary transition"
            >
              Our Products
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="border border-primary text-primary px-6 py-2 rounded shadow-lg hover:bg-softNeutral hover:text-secondary transition"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Bottom Half */}
        <div className="h-1/2 flex flex-col justify-between relative space-y-3">
          {/* Quote */}
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center space-y-4">
            <p className="text-5xl font-playfair font-bold text-secondary tracking-wider leading-snug">
              <span className="text-primary">Green Beauty</span>
            </p>
            <p className="text-lg font-serif text-secondary/70 italic">
              A Feel of Paradise
            </p>
          </div> */}

          {/* Top Row (Slides right) */}
          <div className="h-1/2 flex overflow-hidden relative z-20">
            <motion.div
              className="absolute flex space-x-6"
              initial={{ x: `${K.HERO_IMAGES.length * 320}px` }}
              animate={{ x: `-${K.HERO_IMAGES.length * 320}px` }}
              transition={{ duration: 60, ease: "linear", repeat: Infinity }}
            >
              {K.HERO_IMAGES.map((img, index) => (
                <div
                  key={index}
                  className="w-[300px] h-[200px] bg-cover bg-center rounded-lg shadow-md"
                  style={{ backgroundImage: `url(${img.src})` }}
                />
              ))}
            </motion.div>
          </div>

          {/* Bottom Row (Slides left) */}
          <div className="h-1/2 flex overflow-hidden relative z-20">
            <motion.div
              className="absolute flex space-x-6"
              initial={{ x: `-${K.HERO_IMAGES.length * 320}px` }}
              animate={{ x: `${K.HERO_IMAGES.length * 320}px` }}
              transition={{ duration: 60, ease: "linear", repeat: Infinity }}
            >
              {K.HERO_IMAGES.map((img, index) => (
                <div
                  key={index}
                  className="w-[300px] h-[200px] bg-cover bg-center rounded-lg shadow-md"
                  style={{ backgroundImage: `url(${img.src})` }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
