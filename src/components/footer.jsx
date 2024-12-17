// src/components/footer.jsx
import React from 'react';
import loveImg from '../assets/love-logo-2.jpeg';
import K from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-softNeutral text-secondary py-12 px-4">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="md:col-span-1">
          <div className="flex items-center space-x-3 mb-4">
            {/* <Droplet className="w-10 h-10 text-primary" /> */}
            <h2 className="text-2xl font-serif font-bold text-secondary">
              Ewura Skin Care & More
            </h2>
          </div>
          <p className="text-secondary/70 mb-4">
            Leading the way in eco-friendly personal care. Transforming eggshells into luxurious skincare solutions for a sustainable future.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            {K.SOCIAL_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold mb-4 text-primary">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {K.QUICK_LINKS.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-primary transition-colors text-secondary/80"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold mb-4 text-primary">
            Contact Us
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary" />
              <span>contact.ewuraskincare@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary" />
              <span>0244342108 / 0503086485</span>
            </div>
            {/* <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span>456 Green Beauty Lane, Accra, Ghana</span>
            </div> */}
          </div>
        </div>

        <img src={loveImg} alt="Brand Logo" className="w-auto h-auto" />
      </div>

      {/* Copyright */}
      <div className="border-t border-secondary/20 mt-8 pt-4 text-center">
        <p className="text-secondary/70">
          © {currentYear} Ewura Skin Care & More. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
