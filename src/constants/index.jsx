// src/constants/index.jsx
import { Droplet } from 'lucide-react';
import aboutimg from '../assets/aboutimg.png';
import facialImg from '../assets/aboutimg.png';
import bodyImg from '../assets/aboutimg.png';
import ritualImg from '../assets/aboutimg.png';

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

  PRODUCTS_CARDS: [
    {
      id: 1,
      title: 'FACIAL TREATMENTS',
      description: 'Experience bespoke facial treatments that rejuvenate your skin—boost hydration, enhance radiance, and restore your natural glow.',
      image: facialImg,
    },
    {
      id: 2,
      title: 'BODY TREATMENTS',
      description: 'Unwind with our luxurious body treatments—our specialists use soothing techniques to enhance your skin\'s vitality and overall well-being.',
      image: bodyImg,
    },
    {
      id: 3,
      title: 'BEAUTY RITUALS',
      description: 'Indulge in our signature beauty rituals, merging traditional and modern methods for complete rejuvenation.',
      image: ritualImg,
    },
  ],
};

export default K;