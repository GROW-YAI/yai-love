// src/pages/landing/components/contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form Submitted', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="contact" 
      className="bg-primary py-16 relative"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 space-y-6"
        >
          <h2 className="text-3xl font-serif font-bold text-secondary mb-6 border-b-2 border-naturalBrown pb-3">
            Get in Touch
          </h2>

          <div className="space-y-4">
            {/* Contact Details */}
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-naturalBrown" />
              <div>
                <p className="text-secondary font-semibold">Email</p>
                <p className="text-secondary/80">hello@eggshellelixir.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-naturalBrown" />
              <div>
                <p className="text-secondary font-semibold">Phone</p>
                <p className="text-secondary/80">+1 (234) 567-890</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-naturalBrown" />
              <div>
                <p className="text-secondary font-semibold">Address</p>
                <p className="text-secondary/80">123 Eggshell Lane, Beauty City, BC 12345</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-serif font-bold text-secondary mb-6 border-b-2 border-naturalBrown pb-3">
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 border border-accent/50 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-naturalBrown 
                text-secondary placeholder-secondary/50"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 border border-accent/50 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-naturalBrown 
                text-secondary placeholder-secondary/50"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="4"
                className="w-full p-3 border border-accent/50 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-naturalBrown 
                text-secondary placeholder-secondary/50 resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-naturalBrown text-white p-3 rounded-lg 
              hover:bg-secondary transition-colors flex items-center 
              justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Decorative Element */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-10 bg-white z-10" /> */}
    </section>
  );
};

export default Contact;