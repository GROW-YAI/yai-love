import React from 'react';
import { Droplet, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <Instagram className="w-6 h-6 hover:text-naturalBrown transition-colors" />, 
      href: "https://instagram.com" 
    },
    { 
      icon: <Facebook className="w-6 h-6 hover:text-naturalBrown transition-colors" />, 
      href: "https://facebook.com" 
    },
    { 
      icon: <Twitter className="w-6 h-6 hover:text-naturalBrown transition-colors" />, 
      href: "https://twitter.com" 
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Soaps', href: '#products' },
    { name: 'Our Process', href: '#process' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-softNeutral text-secondary py-12 px-4">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="md:col-span-1">
          <div className="flex items-center space-x-3 mb-4">
            <Droplet className="w-10 h-10 text-naturalBrown" />
            <h2 className="text-2xl font-serif font-bold text-secondary">
              Eggshell Elixir
            </h2>
          </div>
          <p className="text-secondary/70 mb-4">
            Crafting luxurious, natural beauty soaps from eggshells. Embrace pure, gentle skincare.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-naturalBrown transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold mb-4 text-naturalBrown">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="hover:text-naturalBrown transition-colors text-secondary/80"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold mb-4 text-naturalBrown">
            Contact Us
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-naturalBrown" />
              <span>contact@eggshlelixir.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-naturalBrown" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-naturalBrown" />
              <span>123 Soap Street, Beauty City</span>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold mb-4 text-naturalBrown">
            Stay Connected
          </h3>
          <form className="space-y-3">
            <input 
              type="email" 
              placeholder="Your email address"
              className="w-full p-2 border border-secondary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-naturalBrown"
            />
            <button 
              type="submit"
              className="w-full bg-naturalBrown text-white p-2 rounded-md hover:bg-secondary transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-secondary/20 mt-8 pt-4 text-center">
        <p className="text-secondary/70">
          © {currentYear} Eggshell Elixir. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;