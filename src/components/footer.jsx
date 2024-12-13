import React from 'react';
import { Droplet, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import loveImg from '../assets/love-logo-2.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6 hover:text-primary transition-colors" />,
      href: "https://www.instagram.com/ewura_skincare_and_more?igsh=YnowODcyZHpod2Nz&utm_source=ig_contact_invite",
    },
    {
      icon: <Facebook className="w-6 h-6 hover:text-primary transition-colors" />,
      href: "https://www.facebook.com/share/15eQP2xB5G/?mibextid=LQQJ4d",
    },
    {
      icon: <FaTiktok className="w-6 h-6 hover:text-primary transition-colors" />,
      href: "https://www.tiktok.com/@ewura.skincare_?_t=8s9ujN07DB0&_r=1",
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Our Process', href: '#process' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

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
            {socialLinks.map((link, index) => (
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
            {quickLinks.map((link, index) => (
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
              <span>info@ewuraskincare.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary" />
              <span>+233 (0) 244-342-108 </span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span>456 Green Beauty Lane, Accra, Ghana</span>
            </div>
          </div>
        </div>

        <img src={loveImg} alt="Brand Logo" className="w-auto h-auto" />
      </div>

      {/* Copyright */}
      <div className="border-t border-secondary/20 mt-8 pt-4 text-center">
        <p className="text-secondary/70">
          © {currentYear} Ewura Skin Care. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
