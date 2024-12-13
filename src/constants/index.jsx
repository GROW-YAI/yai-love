// src/constants/index.jsx
import { Droplet } from 'lucide-react';
import product1Img from '../assets/combo-all.jpeg';
import product2Img from '../assets/handsoap.jpeg';
import product3Img from '../assets/shampoo.jpeg';
import product4Img from '../assets/shampoo&gel.jpeg';
import showergelImg from '../assets/shampoo&gel.jpeg';
import shampooImg from '../assets/shampoo.jpeg';
import handwashingsoapImg from '../assets/handsoap.jpeg';

const K = {
  NAVLINKS: [
    { 
      id: 'home',
      name: 'Home',
      icon: <Droplet className="w-5 h-5" />
    },
    {
      id: 'about',
      name: 'About Us',
      icon: <Droplet className="w-5 h-5" />
    },
    {
      id: 'products',
      name: 'Soaps',
      icon: <Droplet className="w-5 h-5" />
    },
    {
      id: 'process',
      name: 'Our Process',
      icon: <Droplet className="w-5 h-5" />
    },
    
    {
      id: 'contact',
      name: 'Contact',
      icon: <Droplet className="w-5 h-5" />
    }
  ],

  HERO_IMAGES: [
    { src: product1Img },
    { src: product2Img },
    { src: product3Img },
    { src: product4Img },
  ],

  PRODUCTS_CARDS : [
    {
      id: 1,
      title: 'Eggshell Shower Gel',
      description: 'Infused with the gentle exfoliating properties of finely processed eggshells, our shower gel cleanses and revitalizes your skin. Experience a refreshing wash that leaves you feeling smooth, hydrated, and renewed.',
      image: showergelImg,
    },
    {
      id: 2,
      title: 'Eggshell Shampoo',
      description: 'Enriched with calcium and essential nutrients from eggshells, our shampoo strengthens and nourishes your hair from root to tip. Say goodbye to dull strands and hello to luscious, vibrant locks.',
      image: shampooImg,
    },
    {
      id: 3,
      title: 'Eggshell Handwashing Soap',
      description: 'Keep your hands soft and germ-free with our eggshell handwashing soap. Designed to cleanse effectively while maintaining your skin’s natural moisture, it’s perfect for daily use.',
      image: handwashingsoapImg,
    },
  ]
};

export default K;