//src/pages/landing/index.jsx
import React from 'react';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Process from './components/process';
import Products from './components/services';

const LandingPage = () => {
  return (
    <div className='m-0'>
      <Navbar />
      <div className="pt-16">
        <Home />
        <About />
        <Products />
        <Process />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
