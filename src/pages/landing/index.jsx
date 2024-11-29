//src/pages/landing/index.jsx
import React from 'react';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const LandingPage = () => {
  return (
    <div className='m-0'>
      <Navbar />
      <div className="pt-24">
        <Home />
        <About />
        <Services />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
