// src/constants/index.jsx
import { Droplet } from 'lucide-react';
import aboutimg from '../assets/aboutimg.png';
import showergelImg from '../assets/aboutimg.png';
import shampooImg from '../assets/aboutimg.png';
import handwashingsoapImg from '../assets/aboutimg.png';

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
    { src: aboutimg },
    { src: aboutimg },
    { src: aboutimg },
    { src: aboutimg },
    { src: aboutimg },
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