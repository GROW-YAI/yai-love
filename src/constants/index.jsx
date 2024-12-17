import { Droplet, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import product1Img from '../assets/combo-all.jpeg';
import product2Img from '../assets/handsoap.jpeg';
import product3Img from '../assets/shampoo.jpeg';
import product4Img from '../assets/shampoo&gel.jpeg';

// Reuse images for products
const K = {
  NAVLINKS: [
    { id: 'home', name: 'Home', icon: <Droplet className="w-5 h-5" /> },
    { id: 'about', name: 'About Us', icon: <Droplet className="w-5 h-5" /> },
    { id: 'products', name: 'Soaps', icon: <Droplet className="w-5 h-5" /> },
    { id: 'process', name: 'Our Process', icon: <Droplet className="w-5 h-5" /> },
    { id: 'contact', name: 'Contact', icon: <Droplet className="w-5 h-5" /> },
  ],

  HERO_IMAGES: [
    { src: product1Img },
    { src: product2Img },
    { src: product3Img },
    { src: product4Img },
  ],

  PRODUCTS_CARDS: [
    {
      id: 1,
      title: 'Eggshell Shower Gel',
      description:
        'Infused with finely processed eggshells, our shower gel cleanses and revitalizes your skin.',
      image: product4Img,
    },
    {
      id: 2,
      title: 'Eggshell Shampoo',
      description:
        'Enriched with essential nutrients, our shampoo strengthens and nourishes your hair.',
      image: product3Img,
    },
    {
      id: 3,
      title: 'Eggshell Handwashing Soap',
      description:
        'Keep your hands soft and germ-free with our eggshell handwashing soap.',
      image: product2Img,
    },
  ],

  SOCIAL_LINKS: [
    {
      icon: <Instagram className="w-6 h-6 hover:text-primary transition-colors" />,
      href: 'https://www.instagram.com/ewura_skincare_and_more',
    },
    {
      icon: <Facebook className="w-6 h-6 hover:text-primary transition-colors" />,
      href: 'https://www.facebook.com/share/15eQP2xB5G/',
    },
    {
      icon: <FaTiktok className="w-6 h-6 hover:text-primary transition-colors" />,
      href: 'https://www.tiktok.com/@ewura.skincare_',
    },
  ],

  QUICK_LINKS: [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Our Process', href: '#process' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ],
};

export default K;
